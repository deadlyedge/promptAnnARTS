import { TCard } from "@/types"
import { useAnnaState } from "@/utils/annaContext"
import { CardItem } from "./CardItem"

export const CardList = () => {
  const { state } = useAnnaState()

  return (
    <div className='flex flex-wrap items-start mt-40 pt-2'>
      {state.cardList.map((card: TCard) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  )
}
