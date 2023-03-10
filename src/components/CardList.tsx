import { useCallback, useReducer } from "react"
import { ACTION_TYPE, TCard } from "../types"
import { init } from "../utils"
import { stateReducer } from "../utils/reducer"
import CardAdd from "./CardAdd"
import CardItem from "./CardItem"
import Editor from "./Editor"

const CardList = () => {
  const [state, dispatch] = useReducer(stateReducer, [], init)

  const addNewCard = useCallback((card: TCard) => {
    dispatch({
      type: ACTION_TYPE.ADD_CARD,
      payload: card,
    })
  }, [])

  const removeCard = useCallback((id: string) => {
    dispatch({
      type: ACTION_TYPE.REMOVE_CARD,
      payload: id,
    })
  }, [])

  const toggleTags = useCallback((cardID: string, id: string) => {
    dispatch({
      type: ACTION_TYPE.TOGGLE_TAGS,
      payload: [cardID, id],
    })
  }, [])

  const refreshEditor = useCallback(() => {
    dispatch({
      type: ACTION_TYPE.REFRESH_EDITOR,
      payload: null,
    })
  }, [])

  return (
    <div className='flex flex-wrap items-start justify-center'>
      <Editor contents={state.editor} />
      <CardAdd addNewCard={addNewCard} />
      {state.cardList.map((card: TCard) => (
        <CardItem
          key={card.id}
          card={card}
          removeCard={removeCard}
          toggleTags={toggleTags}
          refreshEditor={refreshEditor}
        />
      ))}
    </div>
  )
}

export default CardList
