import React from "react";

function PopupWithForm(props) {
  return (
    <section
      className={`modal modal-${props.name} 
      ${props.isOpen ? "modal_active" : ""}`}
    >
      <div className={`modal__content modal__content_${props.name}`}>
        <button
          type="button"
          className="modal__close button-hover"
          onClick={props.onClose}
        ></button>
        <form
          className="modal__form"
          name={props.name}
          onSubmit={props.onSubmit}
          noValidate
        >
          <h3 className="modal__title">{props.title}</h3>
          {props.children}
          <input
            type="submit"
            value={props.valueSubmit}
            className="modal__submit-button"
          />
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
