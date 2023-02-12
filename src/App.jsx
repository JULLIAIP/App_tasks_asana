import { BrowserRouter } from "react-router-dom"
import { StateGblobal } from "./global/EstadoGlobal"
import Routing from "./global/Rotas"

function App() {


  return (
    <BrowserRouter>
      <StateGblobal>
        <Routing />
      </StateGblobal>
    </BrowserRouter>
  )
}

export default App
