import React, { useEffect, useState } from 'react';
import { MoonLoader } from 'react-spinners';
import NextVideoItem from './NextVideoItem';
import './_NextVideos.scss';
import axios from '@/data/axios';
import routes from '@/data/routes';

function NextVideos({ playing }) {
    const [loading, setLoading] = useState(true);
    const [nextVideos, setNextVideos] = useState(null);

    useEffect(() => {
        async function fetchVideos() {
            const videos = await axios.get(routes.videos);
            setNextVideos(videos.data);
            setLoading(false);
        }

        fetchVideos();
    }, []);

    if (loading) {
        return (
            <aside className="NextVideos">
                <MoonLoader
                    className="NextVideos__loader"
                    color="#0095FF"
                    loading={loading}
                />
            </aside>
        );
    }

    return (
        <aside className="NextVideos">
            <h3 className="NextVideos__heading">next videos</h3>
            {nextVideos
                .filter((videoItem) => videoItem.id !== playing.id)
                .map((videoItem) => (
                    <NextVideoItem key={videoItem.id} video={videoItem} />
                ))}
        </aside>
    );
}

export default NextVideos;
