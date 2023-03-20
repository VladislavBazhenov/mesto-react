import { useState, useEffect } from "react";
import Card from "./Card";
import api from "../utils/api";

function Main(props) {
  //переменные состояния апи
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(initialCards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
            src={userAvatar}
            className="profile__avatar"
            alt="Аватар профиля"
          />
        </div>
        <div className="profile__container">
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__editButton button-hover"
              onClick={() => {
                props.onEditProfile();
              }}
            ></button>
          </div>
          <p className="profile__profession">{userDescription}</p>
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
          {cards.map((card) => {
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
