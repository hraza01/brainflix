import React from 'react';
import "./_Comments.scss"

// write logic for one comment item here
const CommentItem = ({name, value, likes, timestamp}) => {
  return (
    <div className="comment__item">
      <div className="comment__avatar"></div>
      <article className="comment__description">
        <h4 className="comment__name">{name}</h4>
        <time className="comment__time">{timestamp}</time>
        <p className="comment__text">{value}</p>

        {/*for sprint 2*/}
        {/*<p className="comment__likes">{likes} Likes</p>*/}
      </article>
    </div>
  );
};

export default CommentItem;
