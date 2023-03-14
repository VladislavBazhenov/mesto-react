import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
      <section className="modal modal-avatar">
        <div className="modal__content modal__content_avatar">
          <button type="button" className="modal__close button-hover"></button>
          <form className="modal__form" name="avatar" novalidate>
            <h3 className="modal__title">Обновить аватар</h3>
            <label className="modal__form-field">
              <input
                required
                id="avatarlink-input"
                type="url"
                className="modal__input modal__input_type_image-link"
                name="link"
                placeholder="Новый аватар"
              />
              <span className="modal__input-error avatarlink-input-error"></span>
            </label>
            <input
              type="submit"
              value="Сохранить"
              className="modal__submit-button"
            />
          </form>
        </div>
      </section>
      <section className="modal modal-edit">
        <div className="modal__content">
          <button type="button" className="modal__close button-hover"></button>
          <form className="modal__form" name="edit" novalidate>
            <h3 className="modal__title">Редактировать профиль</h3>
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
      <section className="modal modal-add">
        <div className="modal__content">
          <button type="button" className="modal__close button-hover"></button>
          <form
            className="modal__form modal__form_type_add"
            name="add"
            novalidate
          >
            <h3 className="modal__title">Новое место</h3>
            <label className="modal__form-field">
              <input
                required
                id="placename-input"
                type="text"
                minlength="2"
                maxlength="30"
                className="modal__input modal__input_type_place-name"
                name="name"
                placeholder="Название"
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
              />
              <span className="modal__input-error imagelink-input-error"></span>
            </label>
            <input
              type="submit"
              value="Создать"
              className="modal__submit-button"
            />
          </form>
        </div>
      </section>
      <section className="modal modal-picture">
        <div className="modal__content modal__content_picture">
          <button type="button" className="modal__close button-hover"></button>
          <div>
            <img alt=" " className="modal-picture__image" />
            <p className="modal__title modal__title_picture"></p>
          </div>
        </div>
      </section>
      <section className="modal modal-delete">
        <div className="modal__content modal__content_delete">
          <button type="button" className="modal__close button-hover"></button>
          <h3 className="modal__title modal__title_delete">Вы уверены?</h3>
          <button className="modal__submit-button">Да</button>
        </div>
      </section>
      <template id="template-cards">
        <li className="card-grid__element">
          <img className="card-grid__item" />
          <button type="button" className="urn button-hover"></button>
          <div className="card-grid__name">
            <h2 className="card-grid__title"></h2>
            <div className="card-grid__likes">
              <button type="button" className="card-grid__likeButton"></button>
              <p className="card-grid__like-counter">0</p>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
