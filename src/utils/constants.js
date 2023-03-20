export const validationSettings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-button",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input-error_active",
  inactiveButtonClass: "modal__input_disabled",
};

export const apiConfig = {
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-60",
  headers: {
    authorization: "3ddf6128-9f8d-4071-8752-9c6a17cb7cb3",
    "Content-Type": "application/json",
  },
};

//export const modalPicture = document.querySelector(".modal-picture");
//export const modalEditProfile = document.querySelector(".modal-edit");
//export const modalAddCard = document.querySelector(".modal-add");
//export const modalEditAvatar = document.querySelector(".modal-avatar");
//export const modalConfirmDelete = document.querySelector(".modal-delete");
//
//export const profileForm = modalEditProfile.querySelector(".modal__form");
//export const nameInput = profileForm.querySelector(".modal__input_type_name");
//export const professionInput = profileForm.querySelector(
//  ".modal__input_type_profession"
//);
//
//export const cardForm = modalAddCard.querySelector(".modal__form");
//
//export const buttonOpenAddModal = document.querySelector(".profile__addButton");
//export const buttonOpenEditModal = document.querySelector(
//  ".profile__editButton"
//);
//export const buttonOpenEditAvatar = document.querySelector(
//  ".profile__avatar-container"
//);
//
//export const avatarForm = modalEditAvatar.querySelector(".modal__form");
//
