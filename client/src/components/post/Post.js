import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PosterName from "./Post";
import TimeAgo from "react-timeago";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Post = ({
  idPost,
  message,
  picture,
  posterId,
  comments,
  likers,
  time,
}) => {
  const userAuth = JSON.parse(localStorage.getItem("userAuth"));
  //let etat = "numbersOfLikes";
  //if (userAuth) {
   // etat = likers.includes(userAuth._id) ? "umbers_liked" : "numbersOfLikes";
 // }

 // const [isLiked, setIsLiked] = useState(likers.length);
  const [isAdmin, setIsAdmin] = useState(false);
  //const [numberLiked, setNumberLiked] = useState(etat);

  const [profil, setProfil] = useState("");
  const [pseudo, setPseudo] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (userAuth) {
      fetch(`http://localhost:4040/api/auth/profil/${userAuth._id}`, {
        method: "GET",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userAuth]);

  useEffect(() => {
    fetch(`http://localhost:4040/api/auth/profil/${posterId}`, {
      method: "GET",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProfil(data.picture);
        setPseudo(data.pseudo);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [posterId]);

  const handelDelete = () => {
    if (userAuth._id === posterId || isAdmin) {
      alert("You gone to delete this post");
      fetch(`http://localhost:4040/api/post/delete/${idPost}`, {
        method: "DELETE",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          alert("Post deleted");
          navigate(0);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("You are unauthorized to delete this post");
    }
  };
  /*const like = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4040/api/post/like/${idPost}`, {
      method: "PATCH",
      body: JSON.stringify({ likerId: userAuth._id }),
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("You liked this post");
        setIsLiked(data.length);
        setNumberLiked("umbers_liked");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const unLike = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4040/api/post/unLike/${idPost}`, {
      method: "PATCH",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likerId: userAuth._id }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("You unLiked this post");
        setIsLiked(data.length);
        setNumberLiked("numbersOfLikes");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };*/

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 cadre">
          <PosterName pseudo={pseudo} profil={profil} />
          {picture ? (
            <img className="picture-post" alt={posterId} src={picture} />
          ) : null}
          <p>{message}</p>
          <p>
            Publier <TimeAgo date={time}/>
          </p>
          <div className="align">
            <div>
  
            </div>
            <div>

            </div>
            <div>
              <Link to={`/UpdatePost/${idPost}`}>
                <FontAwesomeIcon icon="fa-pen-to-square" />
              </Link>
            </div>
            <div onClick={handelDelete}>
              <FontAwesomeIcon icon="fa-trash-can" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;