
export default function CardFlat({location}) {
    return (
        <div className="card">
            <img src={location.cover} alt={`Photo de ${location.title}`} />
            <h2 className="card-title">{location.title}</h2>
        </div>
    )
}