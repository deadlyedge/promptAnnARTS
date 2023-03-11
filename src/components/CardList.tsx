import { useCallback, useReducer } from "react"
import { ACTION_TYPE, TCard } from "../types"
import { init } from "../utils"
import { useAnnaState } from "../utils/annaContext"
import { stateReducer } from "../utils/reducer"
import CardAdd from "./CardAdd"
import CardItem from "./CardItem"
import Editor from "./Editor"

const CardList = () => {
  const { state, dispatch } = useAnnaState()

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
