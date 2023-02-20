import React from 'react';
import './_Video.scss';
import VideoItem from './VideoItem.jsx';
import Comments from '../Comments/Comments';
import CommentForm from '../Comments/CommentForm';
import axios from '@/data/axios';
import routes from '@/data/routes';

function VideoDetail({ media, onUpdateVideoDetail }) {
    const updateVideoDetail = (videoId) => {
        axios.get(`${routes.videos}/${videoId}`).then((response) => {
            onUpdateVideoDetail(response.data);
        });
    };

    return (
        <div className="video__information">
            <VideoItem
                title={media.title}
                channel={media.channel}
                timestamp={media.timestamp}
                views={media.views}
                likes={media.likes}
                description={media.description}
                commentCount={media.comments.length}
            />
            <CommentForm videoId={media.id} onComment={updateVideoDetail} />
            <Comments data={media.comments} />
        </div>
    );
}

export default VideoDetail;
