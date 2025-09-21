import CardList from "./components/CardList"
import PageFooter from "./components/PageFooter"
import PageHeader from "./components/PageHeader"
import { AnnaProvider } from "../../src/utils/annaContext"

function App() {
  return (
    <AnnaProvider>
      <PageHeader />
      <CardList />
      <PageFooter />
    </AnnaProvider>
  )
}

export default App
