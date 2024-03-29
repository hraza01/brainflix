import axios from '@/data/axios.js'
import routes from '@/data/routes.js'

// sends a GET request to the API to get all videos and returns the data object.
async function fetchVideos() {
  try {
    const response = await axios.get(routes.videos)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

// sends a GET request to the API to get one video and returns the data object.
async function fetchVideo(videoId) {
  try {
    const response = await axios.get(`${routes.videos}/${videoId}`)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

// sends a GET request to fetch results for one video, if no videoId is given
// it proceeds to send a request to get all videos using the helper function
// above and selects the first result of the array and updates the video on
// the page using the setter functions.
async function fetchCurrentVideo(
  videoId,
  errorSetter,
  loadingSetter,
  videoSetter
) {
  try {
    if (!videoId) {
      const videos = await fetchVideos()
      videoId = videos[0].id
    }
    const video = await fetchVideo(videoId)
    videoSetter(video)
    loadingSetter(false)
  } catch (error) {
    errorSetter(true)
    loadingSetter(false)
    console.log(error)
  }
}

// sends a POST request to upload a new video to the server
async function uploadVideo(video) {
  const res = await axios.post(routes.videos, video)

  if (res.status === 200) return res.data
}

// sends a PUT request to the API to update like count of the video
// and returns the updated data object.
async function likeVideo(videoId) {
  const url = [routes.videos, `/${videoId}`, routes.like].join('')

  try {
    const response = await axios.put(url)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

// sends a GET request using the helper function above to get all videos
// and then sets/updates the NextVideos section using the setter functions.
async function fetchNextVideos(loadingSetter, nextVideosSetter) {
  try {
    const videos = await fetchVideos()
    nextVideosSetter(videos)
    loadingSetter(false)
  } catch (error) {
    console.log(error)
  }
}

// Takes videoId, a comment, posts it to the API and takes a render function
// to update the state of current video on the page
async function postComment(videoId, comment, setter) {
  const url = [routes.videos, `/${videoId}`, routes.comments].join('')

  try {
    const response = await axios.post(url, comment)

    if (response.status === 200) {
      fetchVideo(videoId).then((res) => setter(res))
    }
  } catch (error) {
    console.log(error)
  }
}

// sends a PUT request to the API to update like count of the comment
// inside the video and returns the updated comment object.
async function likeComment(videoId, commentId) {
  const url = [
    routes.videos,
    `/${videoId}`,
    routes.comments,
    `/${commentId}`,
    routes.like,
  ].join('')

  try {
    const response = await axios.put(url)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

// Takes videoId, a commentId, sends a delete request to API,
// and takes a render function to update the state of current video on the page
async function deleteComment(videoId, commentId, setter) {
  const url = [
    routes.videos,
    `/${videoId}`,
    routes.comments,
    `/${commentId}`,
  ].join('')

  try {
    const response = await axios.delete(url)
    if (response.status === 200) {
      const video = await fetchVideo(videoId)
      setter(video)
    }
  } catch (error) {
    console.log(error)
  }
}

export {
  fetchCurrentVideo,
  likeVideo,
  uploadVideo,
  fetchNextVideos,
  postComment,
  likeComment,
  deleteComment,
}
