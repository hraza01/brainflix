import React from 'react';
import commentAvatar from "../../assets/images/Mohan-muruge.jpg"
import commentLogo from "../../assets/icons/add_comment.svg"


const CommentForm = () => {
  return (
    <div className="comment__form-container">
      <img alt="user profile picture"
           className="comment__avatar comment__avatar--form"
           src={commentAvatar}/>
      <form action="/" className="comment__form">
        <label htmlFor="comment">join the conversation</label>
        <textarea id="comment" name="comment"
                  placeholder="Add a new comment"
                  required
                  rows="5">
          </textarea>

        <div className="comment__btn-container">
          <button className="comment__btn">
            <img className="comment__btn-logo" src={commentLogo} alt="comment-logo"/>
            <span className="comment__btn-text">comment</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
