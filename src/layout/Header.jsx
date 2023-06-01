import {Link} from "react-router-dom"


export default function Header({location}) {

    return (
        <header className="header">
            <div className="header-logo">
                <img src="/assets/LOGO.svg" alt="Logo de Kasa" />
            </div>
            <nav className="nav">
                <ul className="nav-list">
                        <Link to={"/"}><li className={`nav-list_item ${location && location.pathname === "/" ? "nav-list_item-active" : ""}`}>Accueil</li></Link>
                        <Link to={"/about"}><li className={`nav-list_item ${location && location.pathname === "/about" ? "nav-list_item-active" : ""}`}>A propos</li></Link>
                </ul>
            </nav>
        </header>
    )
}