import React from "react";

function PopupWithForm(props) {
  return (
    <section className={`modal modal-${props.name}`}>
      <div className="modal__content">
        <button type="button" className="modal__close button-hover"></button>
        <form className="modal__form" name={props.name} novalidate>
          <h3 className="modal__title">{props.title}</h3>
          <label className="modal__form-field">
            <input
              required
              id="name-input"
              type="text"
              minlength="2"
              maxlength="40"
              className="modal__input modal__input_type_name"
              name="username"
              placeholder="Введите имя"
            />
            <span className="modal__input-error name-input-error"></span>
          </label>
          <label className="modal__form-field">
            <input
              required
              id="profession-input"
              type="text"
              minlength="2"
              maxlength="200"
              className="modal__input modal__input_type_profession"
              name="profession"
              placeholder="Введите профессию"
            />
            <span className="modal__input-error profession-input-error"></span>
          </label>
          <input
            type="submit"
            value="Сохранить"
            className="modal__submit-button"
          />
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
