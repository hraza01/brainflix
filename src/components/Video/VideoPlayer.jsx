import React, { useEffect, useRef, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import VideoPlayerControls from './VideoPlayerControls'
import { formatPlayerTime } from '@/utils/helpers.js'
import './_Video.scss'

function VideoPlayer({ video }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isWaiting, setIsWaiting] = useState(false)
  const [currentTime, setCurrentTime] = useState('00:00')
  const [currentSeek, setCurrentSeek] = useState(0)
  const [videoDuration, setVideoDuration] = useState(video.duration)

  const videoRef = useRef(null)

  const playPauseHandler = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
  }

  const fullScreenHandler = () => {
    if (!videoRef.current) return
    const element = videoRef.current

    if (document.fullscreenElement === null) {
      element.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  useEffect(() => {
    if (!videoRef.current) return

    const onPlay = () => {
      setIsPlaying(true)
    }

    const onPause = () => {
      if (isWaiting) setIsWaiting(false)
      setIsPlaying(false)
    }

    const onWaiting = () => {
      if (isPlaying) setIsPlaying(false)
      setIsWaiting(true)
    }

    const element = videoRef.current

    const onTimeUpdate = () => {
      if (!videoRef.current) return

      const { currentTime, duration } = element
      const { time, dur } = formatPlayerTime(currentTime, duration)

      setCurrentTime(time)
      setVideoDuration(dur)
      setCurrentSeek((currentTime / duration) * 100)
    }

    setCurrentSeek(0)
    element.addEventListener('play', onPlay)
    element.addEventListener('playing', onPlay)
    element.addEventListener('pause', onPause)
    element.addEventListener('waiting', onWaiting)
    element.addEventListener('timeupdate', onTimeUpdate)

    return () => {
      element.removeEventListener('play', onPlay)
      element.removeEventListener('playing', onPlay)
      element.removeEventListener('pause', onPause)
      element.removeEventListener('waiting', onWaiting)
      element.removeEventListener('timeupdate', onTimeUpdate)
    }
  }, [video.id, videoRef.current])
  console.log(videoRef)
  return (
    <div className="video__container">
      <div className="video__playerWrapper">
        {isWaiting && (
          <ClipLoader
            className="video__spinner"
            color="#0095FF"
            loading={isWaiting}
            aria-label="Loading Spinner"
          />
        )}
        <video
          key={video.id}
          className="video__player"
          src={`${video.video}`}
          poster={video.image}
          muted={isMuted}
          ref={videoRef}
          onClick={playPauseHandler}
          autoPlay={false}
        ></video>
        <div>
          <VideoPlayerControls
            id={video.id}
            onPlayPause={playPauseHandler}
            onFullScreen={fullScreenHandler}
            playing={isPlaying}
            muted={isMuted}
            currentTime={currentTime}
            sliderValue={currentSeek}
            duration={videoDuration}
          />
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
