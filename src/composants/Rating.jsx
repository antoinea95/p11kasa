export default function Rating({ rating }) {
  
  // array of all rates
  const rate = [1, 2, 3, 4, 5];

  return (
    <section className="rating">
      {rate.map((item) =>
        rating >= item ? (
          <img
            key={item.toString()}
            src="/assets/star-active.svg"
            alt="étoile pleine"
          />
        ) : (
          <img
            key={item.toString()}
            src="/assets/star-inactive.svg"
            alt="étoile vide"
          />
        )
      )}
    </section>
  );
}
