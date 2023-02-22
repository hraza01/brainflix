import axios from '@/data/axios';
import routes from '@/data/routes';

// sends a GET request to the API to get all videos and returns the data object.
async function fetchVideos() {
    try {
        const response = await axios.get(routes.videos);
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
}

// sends a GET request to the API to get one video and returns the data object.
async function fetchVideo(videoId) {
    try {
        const response = await axios.get(`${routes.videos}/${videoId}`);
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
}

export { fetchVideos, fetchVideo };
