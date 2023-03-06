import React from 'react';
import './_NextVideos.scss';
import { Link } from 'react-router-dom';

function NextVideoItem({ video }) {
    return (
        <Link to={`/videos/${video.id}`} className="NextVideos__item">
            <img
                className="NextVideos__img"
                src={video.image}
                alt="video thumbnail"
            />
            <div className="NextVideos__container">
                <h4 className="NextVideos__title">{video.title}</h4>
                <p className="NextVideos__channel">{video.channel}</p>
            </div>
        </Link>
    );
}

export default NextVideoItem;
