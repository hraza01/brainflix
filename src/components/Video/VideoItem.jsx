import React from 'react';
import "./_Video.scss"
import VideoDetail from "./VideoDetail.jsx";
import Comments from "../Comments/Comments.jsx";
import CommentForm from "../Comments/CommentForm.jsx";


const VideoItem = ({media}) => {

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
      <CommentForm/>
      <Comments data={media.comments}/>
    </div>
  );
};

export default VideoItem;
