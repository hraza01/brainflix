import React from 'react';
import VideoPlayerControls from './VideoPlayerControls';

function VideoPlayer({ video }) {
    return (
        <div className="video__container">
            <div className="video__playerWrapper">
                <video
                    className="video__player"
                    src={`${video.video}?api_key=${
                        import.meta.env.VITE_API_KEY
                    }`}
                    poster={video.image}
                    muted
                ></video>
                <VideoPlayerControls
                    playing={false}
                    currentTime={'0:00'}
                    duration={video.duration}
                />
            </div>
        </div>
    );
}

export default VideoPlayer;
