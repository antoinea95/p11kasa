import { Route, Routes } from "react-router-dom"
import Header from "./layout/Header"
import "./styles/main.css"
import Home from "./pages/Home"
import About from "./pages/About"
import { useEffect, useState } from "react"
import Location from "./pages/Location"
import Error404 from "./pages/Error404"

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
        <Route exact path="/location/:id" element={<Location locations={allLocations} />}/>
        <Route path="*" element={<Error404 />}/>
      </Routes>
    </>
  )
}

export default App
