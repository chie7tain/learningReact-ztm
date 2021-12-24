import React from "react";
import "./card.styles.css";
const Card = (props) => {
  const { monster } = props;
  return (
    <div className="card-container">
      <img
        alt={monster.name}
        src={`https://robohash.org/${monster.id}?sert=set&size=100x100`}
      />
      <h1 className="monster-name">{monster.name}</h1>
      <h2 className="monster-mail">{monster.email}</h2>
      <p className="monster-number">
        Call {monster.name} at {monster.phone.match(/[0-9][\S]/g)}
      </p>
    </div>
  );
};
export default Card;
