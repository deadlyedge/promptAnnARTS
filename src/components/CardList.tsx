import { TCard } from "../types"
import { useAnnaState } from "../utils/annaContext"
import CardAdd from "./CardAdd"
import CardItem from "./CardItem"
import Editor from "./Editor"

const CardList = () => {
  const { state } = useAnnaState()

  return (
    <div className='flex flex-wrap items-start justify-center'>
      <Editor />
      <CardAdd />
      {state.cardList.map((card: TCard) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  )
}

export default CardList
