import React from 'react';
import './_Video.scss';

function VideoPlayer({ media }) {
    return (
        <div className="video__container">
            <video className="video__player" poster={media.image} controls>
                <source src={media.video} type="video/mp4" />
            </video>
        </div>
    );
}

export default VideoPlayer;
