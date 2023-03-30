import React, { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    avatarRef.current.value = "";
  }

  useEffect(() => {
    if (props.isOpen) {
      avatarRef.current.value = "";
    }
  }, [props.isOpen]);

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      valueSubmit="Обновить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__form-field">
        <input
          required
          id="avatarlink-input"
          type="url"
          className="modal__input modal__input_type_image-link"
          name="link"
          placeholder="Новый аватар"
          ref={avatarRef}
        />
        <span className="modal__input-error avatarlink-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
