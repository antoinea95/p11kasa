
export default function Hero({location}) {
    
    return (
        <section className={`hero ${location === "home" ? "hero-home" : "hero-about"}`}>
                {location === "home" && <h1 className="hero-title">Chez vous, partout et ailleurs</h1>}
        </section>
    )
}