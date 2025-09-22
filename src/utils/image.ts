import exifr from 'exifr'
import { v4 as uuid } from 'uuid'
import type { TPrompt } from '@/types'

function decodeUserComment(userComment: unknown): string | null {
  try {
    if (!userComment) return null
    const text = new TextDecoder().decode(userComment as ArrayBuffer)
    // Remove NULs and stray headers like "UNICODE"
    return text
      .split('')
      .filter((c) => c !== '\x00')
      .join('')
      .replace('UNICODE', '')
  } catch {
    return null
  }
}

function splitPromptItems(input: string): string[] {
  if (!input) return []
  // Temporarily replace commas inside parentheses to avoid splitting them
  const placeholder = '__COMMA__'
  const protectedCommas = input.replace(/,(?=[^()]*\))/g, placeholder)
  return protectedCommas
    .split(',')
    .map((s) => s.trim().replaceAll(placeholder, ','))
    .filter(Boolean)
}

function toTPrompts(items: string[]): TPrompt[] {
  return items.map((prompt) => ({ id: uuid(), prompt, checked: false }))
}

export async function parseImageMetadata(image: File): Promise<{
  prompts: TPrompt[]
  negatives: TPrompt[]
  generator_reference: string[]
}> {
  const output = (await exifr.parse(image, true)) as {
    parameters?: string
    userComment?: unknown
  }

  const raw = (output?.parameters as string | undefined) ?? decodeUserComment(output?.userComment)
  if (!raw) throw new Error('No EXIF parameters found')

  const parts = raw.split('Steps:')
  const stepsPart = parts[1] ?? ''
  const generator_reference = ('Steps:' + stepsPart)
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)

  const [promptPart, negativePartRaw] = (parts[0] ?? '').split('Negative prompt:')
  const prompts = toTPrompts(splitPromptItems(promptPart ?? ''))
  const negatives = toTPrompts(splitPromptItems(negativePartRaw ?? ''))

  return { prompts, negatives, generator_reference }
}
