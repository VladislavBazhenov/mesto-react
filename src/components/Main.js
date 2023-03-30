import { useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

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
            src={currentUser.avatar}
            className="profile__avatar"
            alt="Аватар профиля"
          />
        </div>
        <div className="profile__container">
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              type="button"
              className="profile__editButton button-hover"
              onClick={() => {
                props.onEditProfile();
              }}
            ></button>
          </div>
          <p className="profile__profession">{currentUser.about}</p>
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
                _id={card._id}
                name={card.name}
                link={card.link}
                likes={card.likes}
                owner={card.owner}
                onCardClick={props.onCardClick}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
