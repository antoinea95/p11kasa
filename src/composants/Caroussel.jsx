import { useState } from "react";

export default function Caroussel({ pictures }) {
  const [indexOfPicture, setIndexOfPicture] = useState(0);

  const handleNextPicture = () => {
    if (indexOfPicture === pictures.length - 1) {
      setIndexOfPicture(0);
    } else {
      setIndexOfPicture((previousIndex) => previousIndex + 1);
    }
  };

  const handlePreviousPicture = () => {
    if (indexOfPicture === 0) {
      setIndexOfPicture(pictures.length - 1);
    } else {
      setIndexOfPicture((previousIndex) => previousIndex - 1);
    }
  };

  return (
    <section className="caroussel">
      <div className="caroussel-container">
        <img src={pictures[indexOfPicture]} alt="" />
      </div>
      {pictures.length > 1 && (
        <div className="caroussel-controllers">
          <button
            className="caroussel-arrow"
            aria-label="Button pour revenir à l'image précédente"
            onClick={handlePreviousPicture}
          >
            <img src="/assets/arrow-left.svg" alt="Flèche précédente" />
          </button>
          <span className="caroussel-numerotation">
            {indexOfPicture + 1} / {pictures.length}
          </span>
          <button
            className="caroussel-arrow"
            aria-label="Button pour passer à l'image suivante"
            onClick={handleNextPicture}
          >
            <img src="/assets/arrow-right.svg" alt="Flèche suivante" />
          </button>
        </div>
      )}
    </section>
  );
}
