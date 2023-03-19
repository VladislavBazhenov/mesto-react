import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  //переменные состояния попапов
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  const onEditAvatar = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const onEditProfile = () => {
    setIsEditProfilePopupOpen(true);
  };
  const onAddPlace = () => {
    setIsAddPlacePopupOpen(true);
  };

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={onEditAvatar}
          onEditProfile={onEditProfile}
          onAddPlace={onAddPlace}
          onCardClick={setSelectedCard}
        />
        <Footer />
      </div>
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        valueSubmit="Обновить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>
      <PopupWithForm
        title="Редактировать профиль"
        name="edit"
        valueSubmit="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        name="add"
        valueSubmit="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>
      <PopupWithForm
        title="Вы уверены?"
        name="delete"
        valueSubmit="Да"
      ></PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
    </div>
  );
}

export default App;
