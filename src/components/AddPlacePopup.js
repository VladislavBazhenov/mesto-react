import React, { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const placeNameRef = useRef();
  const placeLinkRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: placeNameRef.current.value,
      link: placeLinkRef.current.value,
    });
  }

  useEffect(() => {
    if (props.isOpen) {
      placeNameRef.current.value = "";
      placeLinkRef.current.value = "";
    }
  }, [props.isOpen]);

  return (
    <PopupWithForm
      title="Новое место"
      name="add"
      valueSubmit="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__form-field">
        <input
          required
          id="placename-input"
          type="text"
          minLength="2"
          maxLength="30"
          className="modal__input modal__input_type_place-name"
          name="name"
          placeholder="Название"
          ref={placeNameRef}
        />
        <span className="modal__input-error placename-input-error"></span>
      </label>
      <label className="modal__form-field">
        <input
          required
          id="imagelink-input"
          type="url"
          className="modal__input modal__input_type_image-link"
          name="link"
          placeholder="Ссылка на картинку"
          ref={placeLinkRef}
        />
        <span className="modal__input-error imagelink-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
