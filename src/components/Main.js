import React from "react";

function Main() {
  return (
    <main className="main">
      <section className="profile">
        <div
          className="profile__avatar-container"
          onClick={() => {
            const modalAvatar = document.querySelector(".modal-avatar");
            modalAvatar.classList.add("modal_active");
          }}
        >
          <img
            src="<%=require('./images/Jak_Iv_Kusto.jpg')%>"
            className="profile__avatar"
            alt="Аватар профиля"
          />
        </div>
        <div className="profile__container">
          <div className="profile__info">
            <h1 className="profile__name">Влад</h1>
            <button
              type="button"
              className="profile__editButton button-hover"
              onClick={() => {
                const modalEditProfile = document.querySelector(".modal-edit");
                modalEditProfile.classList.add("modal_active");
              }}
            ></button>
          </div>
          <p className="profile__profession">Тест</p>
        </div>
        <div>
          <button
            type="button"
            className="profile__addButton button-hover"
            onClick={() => {
              const modalAddCard = document.querySelector(".modal-add");
              modalAddCard.classList.add("modal_active");
            }}
          ></button>
        </div>
      </section>
      <section className="places" aria-label="Фото красивых мест">
        <ul className="card-grid"></ul>
      </section>
    </main>
  );
}

export default Main;
