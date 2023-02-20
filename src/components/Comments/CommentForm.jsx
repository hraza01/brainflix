import React from 'react';
import commentAvatar from '@/assets/images/Mohan-muruge.jpg';
import commentLogo from '@/assets/icons/add_comment.svg';
import axios from '@/data/axios';
import routes from '@/data/routes';
import { uniqueNamesGenerator, starWars } from 'unique-names-generator';

function CommentForm({ videoId, onComment }) {
    const config = {
        dictionaries: [starWars],
    };
    const formSubmitHandler = (event) => {
        const url = [routes.videos, `/${videoId}`, routes.comments].join('');
        const newComment = {
            name: uniqueNamesGenerator(config),
            comment: event.target.comment.value,
        };

        axios.post(url, newComment).then((response) => {
            onComment(videoId);
        });

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
