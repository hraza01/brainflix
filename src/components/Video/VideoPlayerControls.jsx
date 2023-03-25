import ReactSlider from 'react-slider'
import playIcon from '@/assets/icons/play.svg'
import pauseIcon from '@/assets/icons/pause.svg'
import fullscreenIcon from '@/assets/icons/fullscreen.svg'
import volumeUpIcon from '@/assets/icons/volume_up.svg'
import volumeOffIcon from '@/assets/icons/volume_off.svg'
import './_Video.scss'

const VideoPlayerControls = ({
  id,
  onPlayPause,
  onFullScreen,
  playing,
  currentTime,
  duration,
  sliderValue,
  isMuted,
  toggleMute,
  volume,
  setVolume,
}) => {
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
        <img
          onClick={toggleMute}
          className="video__volume"
          src={isMuted ? volumeOffIcon : volumeUpIcon}
          alt="play icon"
        />
      </div>
      <div className="video__controls video__volume-control">
        {/*volume*/}
        <ReactSlider
          className="video__slider--vertical"
          thumbClassName="video__thumb"
          trackClassName="video__track--vertical"
          orientation="vertical"
          invert={true}
          value={volume}
          onChange={(e) => {
            setVolume(e)
          }}
        />
      </div>
    </div>
  )
}

export default VideoPlayerControls
