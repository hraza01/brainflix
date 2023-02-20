import React, { useEffect, useState } from 'react';
import './_Video.scss';
import { useParams } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import VideoPlayer from '@/components/Video/VideoPlayer';
import VideoDetail from '@/components/Video/VideoDetail.jsx';
import NextVideos from '@/components/NextVideos/NextVideos';
import axios from '@/data/axios';
import routes from '@/data/routes';
import NotFound from '@/pages/NotFound';

function Video() {
    let { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currentVideo, setCurrentVideo] = useState();

    useEffect(() => {
        async function fetchVideo() {
            try {
                if (!id) {
                    const videos = await axios.get(routes.videos);
                    id = videos.data[0].id;
                }
                const video = await axios.get(`${routes.videos}/${id}`);

                setCurrentVideo(video.data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        }

        fetchVideo();
    }, [id]);

    if (loading) {
        return (
            <div className="video__content-wrapper">
                <MoonLoader
                    className="video__loader"
                    color="#0095FF"
                    loading={loading}
                />
            </div>
        );
    }

    if (!loading && error) {
        return <NotFound />;
    } else {
        return (
            <>
                <VideoPlayer media={currentVideo} />
                <div className="video__content-wrapper">
                    <VideoDetail
                        media={currentVideo}
                        onUpdateVideoDetail={setCurrentVideo}
                    />
                    <NextVideos playing={currentVideo} />
                </div>
            </>
        );
    }
}

export default Video;
