import React from 'react';
import './_Comments.scss';
import {
    HandThumbUpIcon,
    TrashIcon,
} from '@heroicons/react/24/outline/index.js';
import axios from '@/data/axios';
import routes from '@/data/routes';

function CommentItem({ videoId, id, name, value, likes, timestamp, onDelete }) {
    const commentDeleteHandler = () => {
        const url = [
            routes.videos,
            `/${videoId}`,
            routes.comments,
            `/${id}`,
        ].join('');

        axios
            .delete(url)
            .then((response) => {
                onDelete(videoId);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="comment__item">
            <div className="comment__avatar" />
            <article className="comment__description">
                <h4 className="comment__name">{name}</h4>
                <time className="comment__time">{timestamp}</time>
                <p className="comment__text">{value}</p>
                <p className="comment__likes">{likes} Likes</p>
                <div className="comment__interactivity">
                    <HandThumbUpIcon className="comment__like" />
                    <TrashIcon
                        onClick={commentDeleteHandler}
                        className="comment__delete"
                    />
                </div>
            </article>
        </div>
    );
}

export default CommentItem;
