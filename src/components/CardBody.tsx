import React, { FC, ReactElement, useCallback } from "react"
import { TCard, TPrompt } from "../types"

interface ICardItem {
  card: TCard
  toggleTags: (cardID: string, id: string) => void
  refreshEditor: () => void
}
export interface IIndexable {
  [key: string]: any
}

const CardBody: FC<ICardItem> = ({
  card,
  toggleTags,
  refreshEditor,
}): ReactElement => {
  const handleSingle = useCallback((id: string) => {
    toggleTags(card.id, id)
    refreshEditor()
  }, [])

  const handleMulti = useCallback((zone: boolean) => {
    zone
      ? card.imageInfo.prompts.map((prompt) => toggleTags(card.id, prompt.id))
      : card.imageInfo.negatives.map((prompt) => toggleTags(card.id, prompt.id))
    refreshEditor()
  }, [])

  // const promptZone = () => {
  //   const zoneList: IIndexable = ["prompts", "negatives"]
  //   return zoneList.map((zone: string) => (
  //     <div
  //       className={
  //         zone == "prompts"
  //           ? "group/item bg-green-400 bg-opacity-40 block"
  //           : "group/item bg-red-400 bg-opacity-40 block"
  //       }>
  //       {(card.imageInfo as IIndexable)[zone].map((prompt: TPrompt) => (
  //         <button className='' key={prompt.id}>
  //           <input
  //             type='checkbox'
  //             id={prompt.id}
  //             className='hidden peer'
  //             checked={prompt.checked}
  //             onChange={() => handleSingle(prompt.id)}
  //           />
  //           <label
  //             className='rounded-full m-0.5 px-1 text-xs text-gray-900 border-2 border-y-0 border-gray-100 bg-gray-200 bg-opacity-50 hover:bg-orange-600 hover:text-gray-50 duration-200 peer-checked:border-orange-600 peer-checked:bg-opacity-90'
  //             htmlFor={prompt.id}>
  //             {prompt.prompt}
  //           </label>
  //         </button>
  //       ))}
  //       <button
  //         className='group invisible hover:bg-slate-200 group-hover/item:visible w-4 h-4 duration-100 hover:scale-125 rounded-full bg-lime-300 absolute right-1'
  //         onClick={() => handleMulti(zone == "prompts")}>
  //         <svg
  //           className='w-4 h-4 mx-auto rotate-45 text-blue-500 group-hover:text-lime-500'
  //           fill='currentColor'
  //           viewBox='7 2 10 20'
  //           xmlns='http://www.w3.org/2000/svg'>
  //           <path d='M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z'></path>
  //         </svg>
  //       </button>
  //     </div>
  //   ))
  // }

  return (
    <div className='text-xs relative'>
      <div className='group/item bg-green-400 bg-opacity-40 block'>
        {card.imageInfo.prompts.map((prompt) => (
          <button className='' key={prompt.id}>
            <input
              type='checkbox'
              id={prompt.id}
              className='hidden peer'
              checked={prompt.checked}
              onChange={() => handleSingle(prompt.id)}
            />
            <label
              className='rounded-full m-0.5 px-1 text-xs text-gray-900 border-2 border-y-0 border-gray-100 bg-gray-200 bg-opacity-50 hover:bg-orange-600 hover:text-gray-50 duration-200 peer-checked:border-orange-600 peer-checked:bg-opacity-90'
              htmlFor={prompt.id}>
              {prompt.prompt}
            </label>
          </button>
        ))}
        <button
          className='group invisible hover:bg-slate-200 group-hover/item:visible w-4 h-4 duration-100 hover:scale-125 rounded-full bg-lime-300 absolute right-1'
          onClick={() => handleMulti(true)}>
          <svg
            className='w-4 h-4 mx-auto rotate-45 text-blue-500 group-hover:text-lime-500'
            fill='currentColor'
            viewBox='7 2 10 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z'></path>
          </svg>
        </button>
      </div>
      <div className='group/item bg-red-400 bg-opacity-40'>
        {card.imageInfo.negatives.map((prompt) => (
          <button className='' key={prompt.id}>
            <input
              type='checkbox'
              id={prompt.id}
              className='hidden peer'
              checked={prompt.checked}
              onChange={() => handleSingle(prompt.id)}
            />
            <label
              className='rounded-full m-0.5 px-1 text-xs text-gray-900 border-2 border-y-0 border-gray-100 bg-gray-200 bg-opacity-50 hover:bg-orange-600 hover:text-gray-50 duration-200 peer-checked:border-orange-600 peer-checked:bg-opacity-90'
              htmlFor={prompt.id}>
              {prompt.prompt}
            </label>
          </button>
        ))}
        <button className='group invisible hover:bg-slate-200 group-hover/item:visible w-4 h-4 duration-100 hover:scale-125 rounded-full bg-lime-300 absolute right-1' onClick={() => handleMulti(false)}>
          <svg
            className='w-4 h-4 mx-auto rotate-45 text-blue-500 group-hover:text-lime-500'
            fill='currentColor'
            viewBox='7 2 10 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z'></path>
          </svg>
        </button>
      </div>
      <label className='text-gray-400 text-xs ml-3 italic align-top mb-0'>
        click{" "}
        <kbd className='rounded border border-gray-400 border-b-2 px-0.5'>
          LABEL
        </kbd>{" "}
        add to editor, or{" "}
        <kbd className='rounded border border-gray-400 border-b-2 px-0.5'>
          +
        </kbd>{" "}
        to reverse select in that zone.
      </label>
    </div>
  )
}

export default CardBody
