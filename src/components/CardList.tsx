import { TCard } from "../types"
import { useAnnaState } from "../utils/annaContext"
import CardItem from "./CardItem"

const CardList = () => {
  const { state } = useAnnaState()

  return (
    <div className='flex flex-wrap items-start mt-40 p-1'>
      {state.cardList.map((card: TCard) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  )
}

export default CardList
