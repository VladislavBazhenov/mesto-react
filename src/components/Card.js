import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(card) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;

  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `card-grid__likeButton ${
    isLiked && "card-grid__likeButton_active"
  }`;

  function handleClick() {
    card.onCardClick(card);
  }
  function handleLikeClick() {
    card.onCardLike(card);
  }
  function handleDeleteClick() {
    card.onCardDelete(card);
  }

  return (
    <li className="card-grid__element">
      <img
        className="card-grid__item"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      {isOwn && (
        <button
          type="button"
          className="urn button-hover"
          onClick={handleDeleteClick}
        ></button>
      )}
      <div className="card-grid__name">
        <h2 className="card-grid__title">{card.name}</h2>
        <div className="card-grid__likes">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <p className="card-grid__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
