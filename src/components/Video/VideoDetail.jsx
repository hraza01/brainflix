import React from 'react';
import VideoItem from './VideoItem';
import Comments from '../Comments/Comments';
import CommentForm from '../Comments/CommentForm';
import './_Video.scss';

function VideoDetail({ video, updateVideoDetail }) {
    return (
        <div className="video__information">
            <VideoItem
                title={video.title}
                channel={video.channel}
                timestamp={video.timestamp}
                views={video.views}
                likes={video.likes}
                description={video.description}
                commentCount={video.comments.length}
            />
            <CommentForm videoId={video.id} onComment={updateVideoDetail} />
            <Comments
                videoId={video.id}
                data={video.comments}
                onDelete={updateVideoDetail}
            />
        </div>
    );
}

export default VideoDetail;
