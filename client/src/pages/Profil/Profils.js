import React, { useEffect, useState } from "react";
import Card from "../../components/Actus/cards";

const Profils = () => {
  const [profils, setProfils] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4040/api/auth/profils/", {
      method: "GET",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProfils(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container profile-page">
      <div className="row center-profil">
        <div className="col-xl-6 col-lg-7 col-md-12">
          <h1>Tous les Profils</h1>
          {profils.map((profil) => (
            <Card
              key={profil._id}
              picture={profil.picture}
              pseudo={profil.pseudo}
              email={profil.email}
              bio={profil.bio}
              isAdmin={profil.isAdmin}
              id={profil._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profils;