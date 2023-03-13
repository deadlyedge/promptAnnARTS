import { TCard } from "../types"
import { useAnnaState } from "../utils/annaContext"
import CardAdd from "./CardAdd"
import CardItem from "./CardItem"
import Editor from "./Editor"

const CardList = () => {
  const { state } = useAnnaState()

  return (
    <div>
      <div className='fixed z-50 left-0 top-0 flex'>
        <Editor />
        <CardAdd />
      </div>
      <div className='flex flex-wrap items-start mt-40 p-1'>
        {state.cardList.map((card: TCard) => (
          <CardItem key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}

export default CardList
