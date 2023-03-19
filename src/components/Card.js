import React from "react";

function Card(card) {
  function handleClick() {
    card.onCardClick(card);
  }
  return (
    <li className="card-grid__element">
      <img
        className="card-grid__item"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <button type="button" className="urn button-hover"></button>
      <div className="card-grid__name">
        <h2 className="card-grid__title">{card.name}</h2>
        <div className="card-grid__likes">
          <button type="button" className="card-grid__likeButton"></button>
          <p className="card-grid__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
