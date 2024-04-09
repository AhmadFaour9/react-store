import React from "react";
import "./Card.css";
const Card = ({ id, img, price, name }) => {
  return (
    <>
      <div className="card1" key={id}>
        <img
          src={img}
          style={{ height: "15rem" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body1">
          <h5 className="card-title p-3">{name}</h5>
          <p className="card-text pb-3">{price}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
