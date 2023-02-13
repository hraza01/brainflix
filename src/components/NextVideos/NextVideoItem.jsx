import React from 'react';
import "./_NextVideos.scss"

const NextVideoItem = ({video, onVideoClick}) => {

  return (
    <div onClick={onVideoClick} data-id={video.id} className="NextVideos__item">
      <img className="NextVideos__img" src={video.image} alt="video image"/>
      <div className="NextVideos__container">
        <h4 className="NextVideos__title">{video.title}</h4>
        <p className="NextVideos__channel">{video.channel}</p>
      </div>
    </div>
  );
};

export default NextVideoItem;
