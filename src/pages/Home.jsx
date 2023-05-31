import { Link } from "react-router-dom";
import CardFlat from "../composants/CardFlat";
import Hero from "../layout/Hero";

export default function Home({locations}) {

    return (
        <article className="home">
        <Hero />
        <section className="home_locations">
            {locations.map(location => {
                return  <Link key={location.id} to={`/location/${location.id}`}><CardFlat location={location} /></Link>
            })}
        </section>
        </article>
    )
}