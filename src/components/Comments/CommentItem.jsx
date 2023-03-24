import React, { useState } from 'react'
import './_Comments.scss'
import { HandThumbUpIcon, TrashIcon } from '@heroicons/react/24/outline/index'
import { deleteComment, likeComment } from '@/utils/services'
import { format } from '@/utils/helpers'

function CommentItem({ videoId, id, name, value, likes, timestamp, onDelete }) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(likes)

  const commentLikeHandler = async () => {
    if (!liked) {
      const res = await likeComment(videoId, id)

      if (res) {
        setLikeCount(res.likes)
        setLiked(true)
      }
    }
  }

  const commentDeleteHandler = () => {
    deleteComment(videoId, id, onDelete)
  }

  return (
    <div className="comment__item">
      <div className="comment__avatar" />
      <article className="comment__description">
        <h4 className="comment__name">{name}</h4>
        <time className="comment__time">{timestamp}</time>
        <p className="comment__text">{value}</p>
        <p className="comment__likes">
          {format(likeCount)}{' '}
          {likeCount > 1 || likeCount === 0 ? 'Likes' : 'Like'}
        </p>
        <div className="comment__interactivity">
          <HandThumbUpIcon
            onClick={commentLikeHandler}
            className={`comment__like ${liked ? 'comment__like--liked' : ''}`}
          />
          <TrashIcon
            onClick={commentDeleteHandler}
            className="comment__delete"
          />
        </div>
      </article>
    </div>
  )
}

export default CommentItem
