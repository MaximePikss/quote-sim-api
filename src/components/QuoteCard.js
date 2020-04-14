import React from "react";

function QuoteCard({ simpson }) {
  return (
    <figure className="QuoteCard">
      <img src={simpson.image} alt={simpson.character} />
      <figcaption>
        <blockquote>{simpson.quote}</blockquote>
        <cite>{simpson.character}</cite>
        <p>{simpson.characterDirection}</p>
      </figcaption>
    </figure>
  );
}

export default QuoteCard;
