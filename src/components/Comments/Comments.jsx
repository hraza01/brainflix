import React from 'react';
import moment from 'moment';
import CommentItem from './CommentItem';
import './_Comments.scss';

function Comments({ videoId, data, onDelete }) {
    return (
        <div className="comment__container">
            {data
                .sort((a, b) => b.timestamp - a.timestamp)
                .map((comment) => (
                    <CommentItem
                        key={comment.id}
                        videoId={videoId}
                        id={comment.id}
                        name={comment.name}
                        value={comment.comment}
                        likes={comment.likes}
                        timestamp={moment(comment.timestamp).fromNow()}
                        onDelete={onDelete}
                    />
                ))}
        </div>
    );
}

export default Comments;
