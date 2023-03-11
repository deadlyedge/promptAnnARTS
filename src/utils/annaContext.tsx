import {
  createContext,
  useContext,
  useReducer,
  Dispatch,
  ReactNode,
} from "react"
import { ACTION_TYPE, IAction, IState, TCard } from "../types"

// const initState = {
//   editor: { prompts: "", negatives: "" },
//   cardList: [],
// }
function initAnna(): IState {
  return { editor: { prompts: "", negatives: "" }, cardList: [] }
}

const AnnaContext = createContext<{
  state: IState
  dispatch: Dispatch<IAction>
}>({ state: initAnna(), dispatch: () => null })

export function AnnaProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(annaReducer, {}, initAnna)

  return (
    <AnnaContext.Provider value={{ state, dispatch }}>
      {children}
    </AnnaContext.Provider>
  )
}

export function useAnnaState() {
  return useContext(AnnaContext)
}

function annaReducer(state: IState, action: IAction): IState {
  const { type, payload } = action

  switch (type) {
    case ACTION_TYPE.ADD_CARD:
      return {
        ...state,
        cardList: [...state.cardList, payload as TCard],
      }
    case ACTION_TYPE.REMOVE_CARD:
      return {
        ...state,
        cardList: state.cardList.filter(
          (item) => item.id !== (payload as string)
        ),
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
                    tag.id === (payload as string[])[1]
                      ? { ...tag, checked: !tag.checked }
                      : { ...tag }
                  ),
                  negatives: card.imageInfo.negatives.map((tag) =>
                    tag.id === (payload as string[])[1]
                      ? { ...tag, checked: !tag.checked }
                      : { ...tag }
                  ),
                },
              }
            : { ...card }
        ),
      }
    case ACTION_TYPE.REFRESH_EDITOR:
      return {
        ...state,
        editor: {
          prompts: state.cardList
            .map((card) => card.imageInfo.prompts.filter((tag) => tag.checked))
            .map((card) =>
              card
                .map((tags) => tags.prompt)
                // .filter((i) => i && i.trim())
                .join(", ")
            )
            .filter((i) => i && i.trim())
            .join(", "),
          negatives: state.cardList
            .map((card) =>
              card.imageInfo.negatives.filter((tag) => tag.checked)
            )
            .map((card) => card.map((tags) => tags.prompt).join(", "))
            .filter((i) => i && i.trim())
            .join(", "),
        },
      }
    default:
      return state
  }
}
