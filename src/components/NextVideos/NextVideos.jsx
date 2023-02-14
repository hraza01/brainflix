import React from 'react';
import NextVideoItem from './NextVideoItem';
import './_NextVideos.scss';
import nextVideosData from '../../data/videos.json';

function NextVideos({ playing, onVideoClick }) {
  return (
    <aside className="NextVideos">
      <h3 className="NextVideos__heading">next videos</h3>
      {nextVideosData
        .filter((videoItem) => videoItem.id !== playing.id)
        .map((videoItem) => (
          <NextVideoItem
            onVideoClick={onVideoClick}
            key={videoItem.id}
            video={videoItem}
          />
        ))}
    </aside>
  );
}

export default NextVideos;
