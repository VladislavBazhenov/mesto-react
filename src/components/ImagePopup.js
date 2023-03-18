import React from "react";

function ImagePopup() {
  return (
    <section className="modal modal-picture">
      <div className="modal__content modal__content_picture">
        <button type="button" className="modal__close button-hover"></button>
        <div>
          <img alt=" " className="modal-picture__image" />
          <p className="modal__title modal__title_picture"></p>
        </div>
      </div>
    </section>
  );
}

export default ImagePopup;
