import { Link } from "react-router-dom";
import CardFlat from "../composants/CardFlat";
import Hero from "../layout/Hero";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {

    const [allProperties, setAllProperties] = useState([])

  const getAllLocations =  () => {
    axios.get('/data.json').then(res => setAllProperties(res.data))
  }

  useEffect(() => {
    getAllLocations()
  }, [])

    return (
        <article className="home">
        <Hero />
        <section className="home_locations">
            {allProperties.map(property => {
                return  <Link key={location.id} to={`/property/${property.id}`}><CardFlat property={property} /></Link>
            })}
        </section>
        </article>
    )
}