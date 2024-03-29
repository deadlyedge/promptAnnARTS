import { TEditor } from "../types"
import { useAnnaState } from "../utils/annaContext"

const Editor = () => {
  const { state } = useAnnaState()

  const contentsReformed = (input: TEditor) => {
    return input.prompts || input.negatives
      ? `Prompts:\n${input.prompts
          .join(", ")}\n\nNegatives:\n${input.negatives
          .join(", ")}`
      : ""
  }

  const fromSelect = contentsReformed(state.editor)

  return (
      <textarea
        className='z-50 outline-none w-[40rem] h-40 m-1 text-sm text-gray-50 placeholder-gray-200 p-1 bg-opacity-20 border-2 rounded ring-offset-0 bg-gray-50 duration-200 hover:border-blue-500  hover:bg-opacity-70 hover:text-gray-900 focus:border-4 focus:bg-opacity-90 focus:text-gray-800  focus:border-orange-500'
        name='editor'
        id='editor'
        placeholder='your prompts here'
        value={fromSelect}
        rows={10}
        readOnly
      />
  )
}

export default Editor
