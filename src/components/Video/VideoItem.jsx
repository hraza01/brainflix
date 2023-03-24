import React, { useState } from 'react'
import './_Video.scss'
import moment from 'moment'
import viewsIcon from '@/assets/icons/views.svg'
import likesIcon from '@/assets/icons/likes.svg'
import { format } from '@/utils/helpers'
import { likeVideo } from '@/utils/services.js'
function VideoItem({
  id,
  title,
  channel,
  timestamp,
  views,
  likes,
  description,
  commentCount,
}) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(likes)

  const likeHandler = async () => {
    if (!liked) {
      const res = await likeVideo(id)

      if (res) {
        setLikeCount(res.likes)
        setLiked(true)
      }
    }
  }

  return (
    <div>
      <h1 className="video__title">{title}</h1>
      <div className="video__details">
        <p className="video__channel">By {channel}</p>
        <div className="video__data-icon-wrapper">
          <img className="video__data-icon" src={viewsIcon} alt="views" />
          <p className="video__views">{format(views)}</p>
        </div>
        <p className="video__timestamp">
          {moment(timestamp).format('MM/DD/YYYY')}
        </p>
        <div className="video__data-icon-wrapper">
          <img
            onClick={likeHandler}
            className={`video__data-icon video__data-icon--likes ${
              liked ? 'video__data-icon--liked' : ''
            }`}
            src={likesIcon}
            alt="likes"
          />
          <p className="video__likes">{format(likeCount)}</p>
        </div>
      </div>
      <article className="video__description">{description}</article>
      <p className="video__comment-count">
        {format(commentCount)}{' '}
        {commentCount > 1 || commentCount === 0 ? 'Comments' : 'Comment'}
      </p>
    </div>
  )
}

export default VideoItem
