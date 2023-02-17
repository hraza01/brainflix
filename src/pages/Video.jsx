/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './_Video.scss';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/Video/VideoPlayer';
import VideoItem from '../components/Video/VideoItem';
import NextVideos from '../components/NextVideos/NextVideos';
import videoData from '../data/video-details.json';

function Video() {
  const { id } = useParams();

  // TODO: make an API request to get the specific video from GET /videos/:id
  // TODO: make an API request to get the FIRST video from GET /videos for home page
  const currentVideo = id
    ? videoData.find((video) => video.id === id)
    : videoData[0];

  return (
    <>
      <VideoPlayer media={currentVideo} />
      <div className="video__content-wrapper">
        <VideoItem media={currentVideo} />
        <NextVideos playing={currentVideo} />
      </div>
    </>
  );
}

export default Video;
