export default function Tag({ allTag }) {
  return (
    <section className="tag-container">
      {allTag.map((tag) => (
        <span key={tag} className="tag-container_item">
          {tag}
        </span>
      ))}
    </section>
  );
}
