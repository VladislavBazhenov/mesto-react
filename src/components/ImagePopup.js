import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <section
      className={`modal modal-picture ${card.link ? "modal_active" : ""}`}
    >
      <div className="modal__content modal__content_picture">
        <button
          type="button"
          className="modal__close button-hover"
          onClick={onClose}
        ></button>
        <div>
          <img
            alt={card.name}
            className="modal-picture__image"
            src={card.link}
          />
          <p className="modal__title modal__title_picture">{card.name}</p>
        </div>
      </div>
    </section>
  );
}

export default ImagePopup;
