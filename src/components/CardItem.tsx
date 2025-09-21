import { TCard } from "../types"
import { CardBody } from "./CardBody"
import { CardHeader } from "./CardHeader"

export const CardItem = ({ card }: { card: TCard }) => {
  const bodyZones = ["prompts", "negatives"]

  return (
    <div className='z-30 bg-cover bg-center w-[35rem] m-1 bg-gray-900 rounded shadow static'>
      <CardHeader card={card} />
      <div className='text-xs relative'>
        {bodyZones.map((zone, index) => (
          <CardBody card={card} zone={zone} key={index} />
        ))}
      </div>
      <div className='mb-1'>
        <label className='text-gray-400 text-xs ml-1 italic'>
          click{" "}
          <kbd className='rounded border border-gray-400 border-b-2 px-0.5'>
            prompt
          </kbd>{" "}
          add to edit zone or{" "}
          <kbd className='rounded border border-gray-400 border-b-2 px-0.5'>
            +
          </kbd>{" "}
          to reverse selection.
        </label>
      </div>
    </div>
  )
}
