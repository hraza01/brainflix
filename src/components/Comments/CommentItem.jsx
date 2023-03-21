import React from 'react';
import './_Comments.scss';
import {
    HandThumbUpIcon,
    TrashIcon,
} from '@heroicons/react/24/outline/index.js';
import { deleteComment } from '@/utils/services.js';
import { format } from '@/utils/helpers';

function CommentItem({ videoId, id, name, value, likes, timestamp, onDelete }) {
    const commentDeleteHandler = () => {
        deleteComment(videoId, id, onDelete);
    };

    return (
        <div className="comment__item">
            <div className="comment__avatar" />
            <article className="comment__description">
                <h4 className="comment__name">{name}</h4>
                <time className="comment__time">{timestamp}</time>
                <p className="comment__text">{value}</p>
                <p className="comment__likes">{format(likes)} Likes</p>
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
