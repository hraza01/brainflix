import React from 'react';
import NextVideoItem from './NextVideoItem';
import './_NextVideos.scss';
import nextVideosData from '../../data/videos.json';

// TODO: use API call to get this data from GET /videos
function NextVideos({ playing }) {
  return (
    <aside className="NextVideos">
      <h3 className="NextVideos__heading">next videos</h3>
      {nextVideosData
        .filter((videoItem) => videoItem.id !== playing.id)
        .map((videoItem) => (
          <NextVideoItem key={videoItem.id} video={videoItem} />
        ))}
    </aside>
  );
}

export default NextVideos;
