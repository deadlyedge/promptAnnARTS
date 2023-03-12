import { TEditor } from "../types"
import { maybeSame } from "../utils"
import { useAnnaState } from "../utils/annaContext"

const Editor = () => {
  const { state } = useAnnaState()

  const contentsReformed = (input: TEditor) => {
    maybeSame("worst quality", "wors quality")
    return input.prompts || input.negatives
      ? `Prompts:\n${input.prompts}\n\nNegatives:\n${input.negatives}`
      : ""
  }

  return (
    <div className='fixed z-50 left-0'>
      <textarea
        className='outline-none w-80 h-80 m-1 text-sm text-gray-50 placeholder-gray-200 p-1 bg-opacity-10 border-2 rounded ring-offset-0 bg-gray-50 duration-200 hover:border-blue-500 hover:scale-105 hover:bg-opacity-50 hover:text-gray-900 focus:border-4 focus:bg-opacity-90 focus:text-gray-800  focus:border-orange-500'
        name='editor'
        id='editor'
        placeholder='your prompts here'
        value={contentsReformed(state.editor)}
        rows={10}
        readOnly
      />
    </div>
  )
}

export default Editor
