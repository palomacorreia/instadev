import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo, getUserHandler, teaser }) => {
  const [following, toggleFolowing] = useState(false);
  const [hasLiked, toggleLike] = useState(false);

  const {imageUrl, likes} = postInfo;
  const {avatar, name, username} = userInfo;

  const likedText = () => {
    switch(countLikes()) {
      case 0:
        return "";
      case 1: 
        return "curtido por " + (<Link to="/">{getUserHandler(likes[0].id).name}</Link>)
      case 2:
        return "curtido por " + (<Link to="/">{getUserHandler(likes[0].id).name}</Link>) + " e outra" + (<Link to="/">pessoa</Link>)
      default:
        return "curtido por " + (<Link to="/">{getUserHandler(likes[0].id).name}</Link>) + " e outras " + (<Link to="/">{countLikes()-1} pessoas</Link>)
    }
  }

  const countLikes = () => {
    let _likes = likes ? likes : [];
    return hasLiked ? _likes.length+1 : _likes.length;
  }

  return (
    <article className="post" data-testid="post">
      {!teaser && (
         <header className="post__header">
         <div className="user">
           <Link to={`/users/${username}`} className="user__thumb">
             <img src={avatar} alt={name} />
           </Link>
           <Link to={`/users/${username}`} className="user__name">
             {name}
           </Link>
         </div>
         <button onClick={() => toggleFolowing(!following)} className="post__context">
           <span className={"follow-btn" + (following ? " is-following" : "")}>
             {following ? "Seguindo" : "Seguir"}
           </span>
         </button>
       </header>
      )}
     
      <figure className="post__figure">
        <img src={imageUrl} alt={username} />
      </figure>
      
      {!teaser && (
        <nav className="post__controls">
          <button onClick={() => toggleLike(!hasLiked)} className="post__control">
            <span className={(hasLiked ? "fas" : "far") + " fa-heart"}></span>
          </button>
          <div className="post__status">
            <div className="user">
              <span>
                {likedText()}
              </span>
            </div>
          </div>
        </nav>
      )}
     

    </article>
  )
}
export default Post;
