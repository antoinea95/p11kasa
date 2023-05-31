import { Route, Routes } from "react-router-dom"
import Header from "./layout/Header"
import "./styles/main.css"
import Home from "./pages/Home"
import About from "./pages/About"
import Error404 from "./pages/Error404"
import Property from "./pages/Property"

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/property/:id" element={<Property/>}/>
        <Route path="*" element={<Error404 />}/>
      </Routes>
    </>
  )
}

export default App
