import React from "react";
import Card from "./Card";

function Main(props) {
  return (
    <main className="main">
      <section className="profile">
        <div
          className="profile__avatar-container"
          onClick={() => {
            props.onEditAvatar();
          }}
        >
          <img
            src={props.avatar}
            className="profile__avatar"
            alt="Аватар профиля"
          />
        </div>
        <div className="profile__container">
          <div className="profile__info">
            <h1 className="profile__name">{props.name}</h1>
            <button
              type="button"
              className="profile__editButton button-hover"
              onClick={() => {
                props.onEditProfile();
              }}
            ></button>
          </div>
          <p className="profile__profession">{props.description}</p>
        </div>
        <div>
          <button
            type="button"
            className="profile__addButton button-hover"
            onClick={() => {
              props.onAddPlace();
            }}
          ></button>
        </div>
      </section>
      <section className="places" aria-label="Фото красивых мест">
        <ul className="card-grid">
          {props.cards.map((card) => {
            return (
              <Card
                key={card._id}
                name={card.name}
                link={card.link}
                likes={card.likes}
                owner={card.owner}
                onCardClick={props.onCardClick}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
