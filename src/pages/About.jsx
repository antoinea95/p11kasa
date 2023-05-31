import Accordion from "../composants/Accordion";
import Hero from "../layout/Hero";

export default function About() {

    const accordionData = [
        {name: "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.", contentType: "paragraph"},
        {name: "Respect", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.", contentType: "paragraph"},
        {name: "Service", content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.", contentType: "paragraph"},
        {name: "Sécurité", content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.", contentType: "paragraph"},
        
    ]

    return (
        <article className="about">
            <Hero location={"about"} />
            <section className="about-body">
                {accordionData.map(item => {
                    return <Accordion key={item.name} name={item.name} content={item.content} contentType={item.contentType} />
                })}
            </section>
        </article>
    )
}