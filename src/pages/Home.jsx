import CardFlat from "../composants/CardFlat";
import Hero from "../layout/Hero";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {

  // Stock all data from API
  const [allProperties, setAllProperties] = useState([]);

  // API Mocked call
  const getAllLocations = () => {
    axios.get("/data.json").then((res) => setAllProperties(res.data));
  };

  // Fetch data on component render
  useEffect(() => {
    getAllLocations();
  }, []);

  return (
    <article className="home">
      <Hero />
      <section className="home_locations">
        {allProperties.map((property) => {
          return <CardFlat key={property.id} property={property} />;
        })}
      </section>
    </article>
  );
}
