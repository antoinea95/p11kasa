import { Route, Routes } from "react-router-dom"
import Header from "./layout/Header"
import "./styles/main.css"
import Home from "./pages/Home"
import About from "./pages/About"
import { useEffect, useState } from "react"

function App() {

  const [allLocations, setAllLocations] = useState([])

  const getAllLocations =  () => {
    fetch("data.json", 
      { headers: 
          {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
      })
      .then(response => {
        return response.json()
      })
      .then(data => {
        setAllLocations(data)
      })
      .catch(error => {
        throw error;
      })
  }

  useEffect(() => {
    getAllLocations()
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home locations={allLocations} />}/>
        <Route exact path="/about" element={<About />}/>
      </Routes>
    </>
  )
}

export default App
