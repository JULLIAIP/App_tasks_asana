import { BrowserRouter } from "react-router-dom"
import Routing from "./global/Rotas"
import BoardTaskPage from "./pages/BoardTaksPage"
import DetailsPage from "./pages/DetailsPage"
import LoginPage from "./pages/LoginPage"

function App() {


  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  )
}

export default App
