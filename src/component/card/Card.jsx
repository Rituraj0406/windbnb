import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "./Card.css";

const Card = ({ img, superhost, title, type, beds, rating }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={img} alt="property" className="rounded-3xl" />
      </div>
      <div className="info-container">
        <div className="info-row">
          {superhost ? <p className="super-host">SUPER HOST</p> : null}
          <p className="room-info">{type} . {beds} beds</p>
        </div>
        <div className="info-row">
          <span className="rating">
            <StarIcon sx={{ color: "#EB5757" }} />
          </span>
          <span className="rating-number">{rating}</span>
        </div>
      </div>
      <p className="title">{title}</p>
    </div>
  );
};

export default Card;
