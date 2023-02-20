import React from 'react';
import ReactPlayer from 'react-player';
import VideoPlayerControls from './VideoPlayerControls';

function VideoPlayer({ video }) {
    return (
        <div className="video__container">
            <div className="video__playerWrapper">
                <ReactPlayer
                    className="video__player"
                    light={<img src={video.image} alt="thumbnail" />}
                    url={`${video.video}?api_key=${
                        import.meta.env.VITE_API_KEY
                    }`}
                    muted
                    playing={false}
                />
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
