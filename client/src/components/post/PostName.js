import React from "react";
import "../styles/post.css";

const PosterName = ({ pseudo, profil }) => {
  return (
    <div className="block-image">
      <img src={profil} alt="" className="photo-profil" /> <span>{pseudo}</span>
    </div>
  );
};

export default PosterName;