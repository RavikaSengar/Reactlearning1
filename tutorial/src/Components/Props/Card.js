import React from "react";
import "./Card.css";

function Card({ name, children }) {
  return (
    <article className="card">
      <h2>{name}</h2>
      <p>{children}</p>
    </article>
  );
}

export default Card;
