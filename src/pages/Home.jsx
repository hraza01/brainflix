import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { fetchCurrentVideo } from '@/utils/services';
import VideoPlayer from '@/components/Video/VideoPlayer';
import VideoDetail from '@/components/Video/VideoDetail';
import NextVideos from '@/components/NextVideos/NextVideos';
import NotFound from '@/pages/NotFound';

function Home() {
    let { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);

    useEffect(() => {
        fetchCurrentVideo(id, setError, setLoading, setCurrentVideo);
    }, [id]);

    if (loading) {
        return (
            <div className="video__content-wrapper">
                <ClipLoader
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

export default Home;
