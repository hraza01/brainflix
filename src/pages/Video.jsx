import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import { fetchCurrentVideo } from '@/utils/services';
import VideoPlayer from '@/components/Video/VideoPlayer';
import VideoDetail from '@/components/Video/VideoDetail';
import NextVideos from '@/components/NextVideos/NextVideos';
import NotFound from '@/pages/NotFound';
import './_Video.scss';

function Video() {
    let { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currentVideo, setCurrentVideo] = useState();

    useEffect(() => {
        fetchCurrentVideo(id, setError, setLoading, setCurrentVideo);
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
                <VideoPlayer video={currentVideo} />
                <div className="video__content-wrapper">
                    <VideoDetail
                        video={currentVideo}
                        updateVideoDetail={setCurrentVideo}
                    />
                    <NextVideos currentVideo={currentVideo} />
                </div>
            </>
        );
    }
}

export default Video;
