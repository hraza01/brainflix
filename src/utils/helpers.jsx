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

function formatPlayerTime(currentTime, duration) {
    const minutes = Math.floor(currentTime / 60)
            .toString()
            .padStart(2, '0'),
        seconds = Math.floor(currentTime - minutes * 60)
            .toString()
            .padStart(2, '0'),
        durationMinutes = Math.floor(duration / 60)
            .toString()
            .padStart(2, '0'),
        durationSeconds = Math.floor(duration - durationMinutes * 60)
            .toString()
            .padStart(2, '0');

    const time = `${minutes}:${seconds}`,
        dur = `${durationMinutes}:${durationSeconds}`;

    return { time, dur };
}
function commentValidator(comment) {
    const pattern = new RegExp(/^(?![\s.]*$).{3,}$/);

    return pattern.test(comment);
}

export { fetchVideos, fetchVideo, formatPlayerTime, commentValidator };
