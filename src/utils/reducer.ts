import { ACTION_TYPE, IAction, IState, TCard, TPrompt } from "../types";

function stateReducer(state: IState, action: IAction): IState {
  const { type, payload } = action

  switch (type) {
    // case ACTION_TYPE.INIT_CARD:
    //   return {
    //     ...state,
    //     cardList: []
    //   }
    case ACTION_TYPE.ADD_CARD:
      return {
        ...state,
        cardList: [...state.cardList, payload as TCard]
      }
    case ACTION_TYPE.REMOVE_CARD:
      return {
        ...state,
        cardList: state.cardList.filter(item => item.id !== payload as string)
      }
    case ACTION_TYPE.TOGGLE_TAGS:
      return {
        ...state,
        cardList: state.cardList.map((card) =>
          card.id === (payload as string[])[0]
            ? {
              ...card,
              imageInfo: {
                ...card.imageInfo,
                prompts: card.imageInfo.prompts.map((tag) =>
                  (tag.id === (payload as string[])[1])
                    ? { ...tag, checked: !tag.checked }
                    : { ...tag }
                ),
                negatives: card.imageInfo.negatives.map((tag) =>
                  (tag.id === (payload as string[])[1])
                    ? { ...tag, checked: !tag.checked }
                    : { ...tag }
                )
              }
            }
            : { ...card }
        )
      }
    case ACTION_TYPE.REFRESH_EDITOR:
      return {
        ...state,
        editor: {
          prompts: state.cardList
            .map(card =>
              card.imageInfo.prompts
                .filter(tag => tag.checked))
            .map(card => card
              .map(tags => tags.prompt)
              // .filter((i) => i && i.trim())
              .join(', '))
            .filter((i) => i && i.trim())
            .join(', '),
          negatives: state.cardList
            .map(card =>
              card.imageInfo.negatives
                .filter(tag => tag.checked))
            .map(card => card
              .map(tags => tags.prompt)
              .join(', '))
            .filter((i) => i && i.trim())
            .join(', ')
        }
      }
    default:
      return state
  }
}

export { stateReducer }