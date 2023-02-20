import React from 'react';
import './_Video.scss';
import moment from 'moment';
import viewsIcon from '@/assets/icons/views.svg';
import likesIcon from '@/assets/icons/likes.svg';

function VideoItem({
    title,
    channel,
    timestamp,
    views,
    likes,
    description,
    commentCount,
}) {
    return (
        <div>
            <h1 className="video__title">{title}</h1>
            <div className="video__details">
                <p className="video__channel">By {channel}</p>
                <div className="video__data-icon-wrapper">
                    <img
                        className="video__data-icon"
                        src={viewsIcon}
                        alt="views"
                    />
                    <p className="video__views">{views}</p>
                </div>
                <p className="video__timestamp">
                    {moment(timestamp).format('MM/DD/YYYY')}
                </p>
                <div className="video__data-icon-wrapper">
                    <img
                        className="video__data-icon"
                        src={likesIcon}
                        alt="likes"
                    />
                    <p className="video__likes">{likes}</p>
                </div>
            </div>
            <article className="video__description">{description}</article>
            <p className="video__comment-count">{commentCount} Comments</p>
        </div>
    );
}

export default VideoItem;
