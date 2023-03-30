import React, { useContext, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit"
      valueSubmit="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__form-field">
        <input
          required
          id="name-input"
          type="text"
          minLength="2"
          maxLength="40"
          className="modal__input modal__input_type_name"
          name="username"
          placeholder="Введите имя"
          value={name}
          onChange={handleChangeName}
        />
        <span className="modal__input-error name-input-error"></span>
      </label>
      <label className="modal__form-field">
        <input
          required
          id="profession-input"
          type="text"
          minLength="2"
          maxLength="200"
          className="modal__input modal__input_type_profession"
          name="profession"
          placeholder="Введите профессию"
          value={description}
          onChange={handleChangeDescription}
        />
        <span className="modal__input-error profession-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
