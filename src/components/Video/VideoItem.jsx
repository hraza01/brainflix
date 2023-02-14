import React from 'react';
import './_Video.scss';
import VideoDetail from './VideoDetail';
import Comments from '../Comments/Comments';
import CommentForm from '../Comments/CommentForm';

function VideoItem({ media }) {
  return (
    <div className="video__information">
      <VideoDetail
        title={media.title}
        channel={media.channel}
        timestamp={media.timestamp}
        views={media.views}
        likes={media.likes}
        description={media.description}
        commentCount={media.comments.length}
      />
      <CommentForm />
      <Comments data={media.comments} />
    </div>
  );
}

export default VideoItem;
