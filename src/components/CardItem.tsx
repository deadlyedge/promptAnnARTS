import { FC, ReactElement } from "react"
import { TCard } from "../types"
import CardBody from "./CardBody"
import CardHeader from "./CardHeader"

interface ICardItem {
  card: TCard
  removeCard: (id: string) => void
  toggleTags: (cardID: string, id: string) => void
  refreshEditor: () => void
}

const CardItem: FC<ICardItem> = ({
  card,
  removeCard,
  toggleTags,
  refreshEditor,
}): ReactElement => {
  return (
    <div className='bg-cover bg-center w-96 m-1 bg-gray-900 rounded shadow static'>
      <CardHeader card={card} removeCard={removeCard} refreshEditor={refreshEditor} />
      <CardBody
        card={card}
        toggleTags={toggleTags}
        refreshEditor={refreshEditor}
      />
    </div>
  )
}

export default CardItem
