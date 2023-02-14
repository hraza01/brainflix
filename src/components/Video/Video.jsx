import React, { useState } from 'react';
import './_Video.scss';
import VideoPlayer from './VideoPlayer';
import VideoItem from './VideoItem';
import NextVideos from '../NextVideos/NextVideos';
import VideoData from '../../data/video-details.json';

function Video() {
  const [currentVideo, setCurrentVideo] = useState(VideoData[0]);

  const videoClickHandler = (event) => {
    const videoClicked = event.target.closest('.NextVideos__item');
    const videoId = videoClicked.dataset.id;

    setCurrentVideo(VideoData.find((video) => video.id === videoId));
  };

  return (
    <>
      <VideoPlayer media={currentVideo} />
      <div className="video__wrapper">
        <VideoItem media={currentVideo} />
        <NextVideos playing={currentVideo} onVideoClick={videoClickHandler} />
      </div>
    </>
  );
}

export default Video;
