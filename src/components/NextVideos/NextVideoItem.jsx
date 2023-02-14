import React from 'react';
import './_NextVideos.scss';

function NextVideoItem({ video, onVideoClick }) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div onClick={onVideoClick} data-id={video.id} className="NextVideos__item">
      <img
        className="NextVideos__img"
        src={video.image}
        alt="video thumbnail"
      />
      <div className="NextVideos__container">
        <h4 className="NextVideos__title">{video.title}</h4>
        <p className="NextVideos__channel">{video.channel}</p>
      </div>
    </div>
  );
}

export default NextVideoItem;
