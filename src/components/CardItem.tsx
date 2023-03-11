import { TCard } from "../types"
import CardBody from "./CardBody"
import CardHeader from "./CardHeader"

const CardItem = ({ card }: { card: TCard }) => {
  const bodyZones = ["prompts", "negatives"]

  return (
    <div className='bg-cover bg-center w-96 m-1 bg-gray-900 rounded shadow static'>
      <CardHeader card={card} />
      <div className='text-xs relative'>
        {bodyZones.map((zone, index) => (
          <CardBody card={card} zone={zone} key={index} />
        ))}
      </div>
    </div>
  )
}

export default CardItem
