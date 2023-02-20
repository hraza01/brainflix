import React from 'react';
import ReactSlider from 'react-slider';
import playIcon from '@/assets/icons/play.svg';
import pauseIcon from '@/assets/icons/pause.svg';
import fullscreenIcon from '@/assets/icons/fullscreen.svg';
import closeFullscreenIcon from '@/assets/icons/close_fullscreen.svg';
import volumeUpIcon from '@/assets/icons/volume_up.svg';
import volumeOffIcon from '@/assets/icons/volume_off.svg';
import scrubIcon from '@/assets/icons/scrub.svg';
import './_Video.scss';

const VideoPlayerControls = ({ playing, currentTime, duration }) => {
    return (
        <div className="video__controlsWrapper">
            <div className="video__controls">
                <img
                    className="video__play-pause"
                    src={!playing ? playIcon : pauseIcon}
                    alt="play icon"
                />
            </div>
            <div className="video__sliderContainer">
                <ReactSlider
                    className="video__slider video__slider--horizontal"
                    thumbClassName="video__thumb"
                    trackClassName="video__track"
                    value={0}
                />
                <span>
                    {currentTime} / {duration}
                </span>
            </div>
            <div className="video__controls">
                <img
                    className="video__fullscreen"
                    src={fullscreenIcon}
                    alt="play icon"
                />
                <img
                    className="video__volume"
                    src={volumeUpIcon}
                    alt="play icon"
                />
            </div>
            <div className="video__controls">
                <ReactSlider
                    className="video__slider--vertical"
                    thumbClassName="video__thumb"
                    trackClassName="video__track--vertical"
                    orientation="vertical"
                    invert="true"
                    defaultValue={0}
                    // value={90} // set seek value here using state
                />
            </div>
        </div>
    );
};

export default VideoPlayerControls;
