
export default function Hero() {
    
    return (
        <section className={`hero ${location.pathname === "/" ? "hero-home" : "hero-about"}`}>
                {location.pathname === "/" && <h1 className="hero-title">Chez vous, partout et ailleurs</h1>}
        </section>
    )
}