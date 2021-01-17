import React, { useEffect, useState } from 'react';
import { getLikes, addLike } from '../../services/like';
import './LikeComponent.css';
import likeSvg from '../../assets/img/like.svg';

const LikeComponent = () => {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    getLikes()
      .then((data) => setLikes(data))
      .catch((error) => console.error(error));
  }, []);

  const like = () => {
    addLike()
      .then((data) => setLikes(data))
      .catch((error) => console.error(error));
  }

  return (
    <section className="like-content">
      <img src={likeSvg} onClick={like} className="like-img" alt="Like" />
      <div className="like-number">{likes}</div>
    </section>
  );
};

export default LikeComponent;