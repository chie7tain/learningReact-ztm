import React from "react";
import "./card.styles.css";
const Card = (props) => {
  const { monster } = props;
  return (
    <div className="card-container">
      <img
        alt={monster.name}
        src={`https://robohash.org/${monster.id}?sert=set&size=180x180`}
      />
      <h1>{monster.name}</h1>
      <h2>{monster.email}</h2>
    </div>
  );
};
export default Card;
