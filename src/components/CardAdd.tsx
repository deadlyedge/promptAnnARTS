import { useCallback } from 'react'
import { FileDrop } from 'react-file-drop'
import { ACTION_TYPE, TCard, TPrompt } from '@/types'
import { v4 as uuid } from 'uuid'
import { formatBytes } from '@/utils'
import { useAnnaState } from '@/utils/annaContext'
import { parseImageMetadata } from '@/utils/image'

export const CardAdd = () => {
  const { dispatch } = useAnnaState()

  const addNewCard = useCallback(
    (card: TCard) => {
      dispatch({
        type: ACTION_TYPE.ADD_CARD,
        payload: card,
      })
    },
    [dispatch],
  )

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handlePrompts = useCallback((prompts: string): TPrompt[] => {
    const result = prompts
      .replace(/,(?=((?!\().)*?\))/g, 'xx.xx') // 匹配括号中的逗号 with a cute pattern
      .split(',')
      .map((withComma) => withComma.trim().replace('xx.xx', ','))
      .filter((i) => i && i.trim())
    // console.log(result)
    return result.map((tag) => {
      return {
        id: uuid(),
        prompt: tag,
        checked: false,
      }
    })
  }, [])

  const handleDroped = (dropedImages: FileList) => {
    const fileList = Object.values(dropedImages)
    fileList.forEach((image) => {
      parseImageMetadata(image)
        .then(({ prompts, negatives, generator_reference }) => {
          if (prompts.length || negatives.length) {
            addNewCard({
              id: uuid(),
              image: image,
              imageInfo: {
                fileName: image.name,
                fileSize: formatBytes(image.size),
                lastModifiedTime: new Date(image.lastModified),
                prompts,
                negatives,
                generator_reference,
              },
            })
          }
        })
        .catch(() => {
          // ignore images without recognizable EXIF prompt content
        })
    })
  }

  return (
    <div className="z-50 w-40 h-40 m-1 border-4 border-dashed bg-gray-100 rounded bg-opacity-50 cursor-pointer group hover:bg-opacity-90 hover:z-20 duration-200">
      <FileDrop
        className="w-40 h-40 py-2 pr-2"
        onDrop={(dropedImages) => handleDroped(dropedImages!)}
      >
        <p className="text-center text-lg uppercase">Drop jpg/png here!</p>
        <svg
          className="w-8 h-8 mx-auto  rotate-45 text-blue-500 group-hover:rotate-[135deg] group-hover:text-lime-500 duration-200"
          fill="currentColor"
          viewBox="7 2 10 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
        </svg>
        <p className="text-center text-xs">
          if picture don&apos;t have <>EXIF</> info, it will not show below
        </p>
      </FileDrop>
    </div>
  )
}
