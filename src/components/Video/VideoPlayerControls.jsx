import { useState } from 'react'
import ReactSlider from 'react-slider'
import playIcon from '@/assets/icons/play.svg'
import pauseIcon from '@/assets/icons/pause.svg'
import fullscreenIcon from '@/assets/icons/fullscreen.svg'
import volumeUpIcon from '@/assets/icons/volume_up.svg'
import './_Video.scss'

const VideoPlayerControls = ({
  id,
  onPlayPause,
  onFullScreen,
  playing,
  currentTime,
  duration,
  sliderValue,
}) => {
  const [volumeLevel, setVolumeLevel] = useState(0)

  return (
    <div className="video__controlsWrapper">
      <div onClick={onPlayPause} className="video__controls">
        <img
          className={`${!playing ? 'video__play' : 'video__pause'}`}
          src={!playing ? playIcon : pauseIcon}
          alt="play icon"
        />
      </div>
      <div className="video__sliderContainer">
        {/*video player seek*/}
        <ReactSlider
          key={id}
          className="video__slider video__slider--horizontal"
          thumbClassName="video__thumb"
          trackClassName="video__track"
          defaultValue={0}
          value={sliderValue}
        />
        <span>
          {currentTime} / {duration}
        </span>
      </div>
      <div className="video__controls">
        <img
          onClick={onFullScreen}
          className="video__fullscreen"
          src={fullscreenIcon}
          alt="play icon"
        />
        <img className="video__volume" src={volumeUpIcon} alt="play icon" />
      </div>
      <div className="video__controls">
        {/*volume*/}
        <ReactSlider
          className="video__slider--vertical"
          thumbClassName="video__thumb"
          trackClassName="video__track--vertical"
          orientation="vertical"
          invert={true}
          defaultValue={0}
          value={0}
        />
      </div>
    </div>
  )
}

export default VideoPlayerControls
