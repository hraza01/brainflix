import React from 'react';
import commentAvatar from '@/assets/images/Mohan-muruge.jpg';
import commentLogo from '@/assets/icons/add_comment.svg';
import { starWars, uniqueNamesGenerator } from 'unique-names-generator';
import { postComment } from '@/utils/services';

function CommentForm({ videoId, onComment }) {
    const formSubmitHandler = (event) => {
        const nameConfig = {
            dictionaries: [starWars],
        };

        const newComment = {
            name: uniqueNamesGenerator(nameConfig),
            comment: event.target.comment.value,
        };

        postComment(videoId, newComment, onComment);
        event.preventDefault();
        event.target.reset();
    };

    return (
        <div className="comment__form-container">
            <img
                alt="user profile"
                className="comment__avatar comment__avatar--form"
                src={commentAvatar}
            />
            <form onSubmit={formSubmitHandler} className="comment__form">
                <label htmlFor="comment">join the conversation</label>
                <textarea
                    id="comment"
                    name="comment"
                    placeholder="Add a new comment"
                    required
                    rows="5"
                />

                <div className="comment__btn-container">
                    <button type="submit" className="comment__btn">
                        <img
                            className="comment__btn-logo"
                            src={commentLogo}
                            alt="comment-logo"
                        />
                        <span className="comment__btn-text">comment</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CommentForm;
