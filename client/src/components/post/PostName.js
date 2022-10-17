import React from "react";

const PosterName = ({ pseudo, profil }) => {
  return (
    <div className="block-image">
      <img src={profil} alt="" className="photo-profil" /> <span>{pseudo}</span>
    </div>
  );
};

export default PosterName;