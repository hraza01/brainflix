import React from 'react';
import './_Comments.scss';

function CommentItem({ name, value, timestamp }) {
  return (
    <div className="comment__item">
      <div className="comment__avatar" />
      <article className="comment__description">
        <h4 className="comment__name">{name}</h4>
        <time className="comment__time">{timestamp}</time>
        <p className="comment__text">{value}</p>
      </article>
    </div>
  );
}

export default CommentItem;
