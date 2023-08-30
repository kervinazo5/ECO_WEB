import { BrowserRouter} from "react-router-dom"


import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import NotFound from "./pages/notFound/NotFound"
import NavBar from "./components/Navbar"



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Home/>
        <About/>
        <Contact/>
        <NotFound/>
      </BrowserRouter>
    </div>
  )
}

export default App