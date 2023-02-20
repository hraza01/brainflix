import React from 'react';
import './_Video.scss';
import VideoItem from './VideoItem.jsx';
import Comments from '../Comments/Comments';
import CommentForm from '../Comments/CommentForm';
import axios from '@/data/axios';
import routes from '@/data/routes';

function VideoDetail({ video, onUpdateVideoDetail }) {
    const updateVideoDetail = (videoId) => {
        axios.get(`${routes.videos}/${videoId}`).then((response) => {
            onUpdateVideoDetail(response.data);
        });
    };

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
