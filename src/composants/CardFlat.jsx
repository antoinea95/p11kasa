
export default function CardFlat({property}) {
    return (
        <div className="card">
            <img src={property.cover} alt={`Photo de ${property.title}`} />
            <h2 className="card-title">{property.title}</h2>
        </div>
    )
}