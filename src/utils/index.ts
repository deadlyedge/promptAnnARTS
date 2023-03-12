import { IState } from "../types"
import { distance } from "fastest-levenshtein"

function init(): IState {
  return { editor: { prompts: '', negatives: '' }, cardList: [] }
}

function maybeSame(source:string, target: string){
  console.log(distance(source,target))
}

function formatBytes(bytes: number, decimals = 1) {
  if (!+bytes) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}
export { formatBytes, maybeSame }