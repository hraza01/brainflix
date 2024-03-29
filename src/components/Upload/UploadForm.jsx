import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { uploadVideo } from '@/utils/services'
import videoPreview from '@/assets/images/Upload-video-preview.jpg'
import publishLogo from '@/assets/icons/publish.svg'
import './Upload.scss'
import { textValidator, urlValidator } from '@/utils/helpers.js'

function UploadForm() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)
  const [urlError, setUrlError] = useState(false)

  useEffect(() => {
    if (title) {
      setTitleError(!textValidator(title))
    }

    if (description) {
      setDescriptionError(!textValidator(description))
    }

    if (url) {
      setUrlError(!urlValidator(url))
    }
  }, [title, description, url])

  const formSubmitHandler = (e) => {
    const video = {
      title,
      description,
      url,
    }

    const valid =
      textValidator(title) && textValidator(description) && urlValidator(url)

    if (valid) {
      uploadVideo(video).then((res) => {
        setTitle('')
        setDescription('')
        setUrl('')
        const message = `Your video ${res.title} has been uploaded to BrainFlix.`
        alert(message)
        navigate('/')
      })
    }
    e.preventDefault()
  }

  return (
    <>
      <div className="upload__form-container">
        <form onSubmit={formSubmitHandler} className="upload__form">
          <div className="upload__form-content">
            <div className="upload__img">
              <label htmlFor="upload">video thumbnail</label>
              <img
                id="upload"
                className="upload__video-thumbnail"
                src={videoPreview}
                alt="video-thumbnail"
              />
            </div>

            <div className="upload__fields">
              <div className="upload__field">
                <div
                  className={
                    titleError ? 'upload__error' : 'upload__error--hidden'
                  }
                >
                  Invalid Title: Must be greater than 3 characters
                </div>
                <label htmlFor="title">title your video</label>
                <input
                  value={title}
                  onChange={(event) => {
                    setTitle(event.target.value)
                  }}
                  className={titleError ? 'upload__form--error' : ''}
                  id="title"
                  placeholder="Add a title to your video"
                  required
                />
              </div>
              <div className="upload__field">
                <div
                  className={
                    descriptionError ? 'upload__error' : 'upload__error--hidden'
                  }
                >
                  Invalid Description: Must be greater than 3 characters
                </div>
                <label htmlFor="description">add a video description</label>
                <textarea
                  value={description}
                  onChange={(event) => {
                    setDescription(event.target.value)
                  }}
                  className={descriptionError ? 'upload__form--error' : ''}
                  id="description"
                  name="description"
                  placeholder="Add description to your video"
                  required
                  rows="5"
                />
              </div>
              <div className="upload__field">
                <div
                  className={
                    urlError ? 'upload__error' : 'upload__error--hidden'
                  }
                >
                  Invalid URL: Image must be hosted on imgur and URL must end
                  with a .jpg file extension
                </div>
                <label htmlFor="title">
                  Add a custom thumbnail for your video (optional)
                </label>
                <input
                  value={url}
                  onChange={(event) => {
                    setUrl(event.target.value)
                  }}
                  className={urlError ? 'upload__form--error' : ''}
                  id="title"
                  placeholder="e.g. https://i.imgur.com/ZYcodqt.jpg"
                  type="url"
                />
              </div>
            </div>
          </div>

          <div className="upload__btn-container">
            <button type="submit" className="upload__btn">
              <img
                className="upload__btn-logo"
                src={publishLogo}
                alt="upload-logo"
              />
              <span className="upload__btn-text">publish</span>
            </button>
            <button type="reset" className="upload__btn upload__btn--cancel">
              cancel
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default UploadForm
