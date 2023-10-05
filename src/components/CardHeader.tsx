import { useCallback } from "react"
import { ACTION_TYPE, TCard } from "../types"
import { useAnnaState } from "../utils/annaContext"

interface ICardItem {
  card: TCard
}

const CardHeader = ({ card }: ICardItem) => {
  const { dispatch } = useAnnaState()

  const handleRemove = useCallback((id: string) => {
    dispatch({
      type: ACTION_TYPE.REMOVE_CARD,
      payload: id,
    })
    dispatch({
      type: ACTION_TYPE.REFRESH_EDITOR,
      payload: null,
    })
  }, [])

  const exp_info = card.imageInfo.generator_reference.map((item, index) => {
    // console.log(item)
    let [node_name, ...node_info] = item.split(":")
    return (
      <span key={index}>
        {node_name.trim()}{" "}
        <span className=' text-orange-300'>
          <code>{node_info}</code>
        </span>
        ,{" "}
      </span>
    )
  })

  return (
    <div className='rounded-t flex flex-row items-end relative'>
      <div className='basis-2/3 self-center'>
        <img
          className='rounded'
          src={URL.createObjectURL(card.image)}
          alt='image'
        />
      </div>
      <div className='basis-1/3 p-1'>
        <p className='text-xs text-gray-400 mt-20 mb-1'>{exp_info}</p>
      </div>
      <div className=' absolute right-1 top-2 text-gray-900 mt-10'>
        <p className='text-xs bg-gray-100 bg-opacity-60 rounded-l p-1'>
          FileName: {card.imageInfo.fileName}
        </p>
      </div>
      <div className='mt-2 absolute right-0 top-0'>
        <button
          type='button'
          className='bg-white bg-opacity-20 text-red-600 border-2 border-red-600 hover:bg-red-500 hover:text-white hover:rotate-90 hover:scale-125 rounded-full p-2 mr-2 duration-500'
          onClick={() => handleRemove(card.id)}>
          <svg
            className='w-4 h-4'
            fill='currentColor'
            viewBox='7 2 10 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z'></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default CardHeader
