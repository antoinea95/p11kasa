import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <article className="error">
      <section className="error-hero">
        <h1 className="error-hero_title">404</h1>
        <p className="error-hero_message">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </section>
      <Link to={"/"}>
        <span className="error-link">Retourner sur la page d'accueil</span>
      </Link>
    </article>
  );
}
