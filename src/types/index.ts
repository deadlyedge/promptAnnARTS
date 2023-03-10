export type TPrompt = {
  id: string,
  prompt: string,
  checked: boolean
}

export type TCard = {
  id: string,
  image: File,
  imageInfo: {
    fileName: string,
    fileSize: string,
    lastModifiedTime: Date,
    prompts: TPrompt[],
    negatives: TPrompt[],
    generator_reference: string,
  }
}

export type TEditor = {
  prompts: string,
  negatives: string,
  // generator_reference: string,
}

export interface IState {
  editor: TEditor,
  cardList: TCard[],
}

export interface IAction {
  type: ACTION_TYPE,
  payload: TCard | TCard[] | TEditor | string | string[] | null,
}

export enum ACTION_TYPE {
  ADD_CARD = 'addCard',
  REMOVE_CARD = 'removeCard',
  INIT_CARD = 'initCard',
  ADD_TO_EDIT = 'addToEdit',
  OPTIMIZE = 'optimize',
  TOGGLE_TAGS = 'toggleTags',
  REFRESH_EDITOR = 'refreshEditor'
}
