import CardList from "./components/CardList"
import PageFooter from "./components/PageFooter"
import { AnnaProvider } from "./utils/annaContext"

function App() {
  return (
    <AnnaProvider>
      <CardList />
      <PageFooter />
    </AnnaProvider>
  )
}

export default App
