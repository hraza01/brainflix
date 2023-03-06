import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { fetchNextVideos } from '@/utils/services';
import NextVideoItem from './NextVideoItem';
import './_NextVideos.scss';

function NextVideos({ currentVideo }) {
    const [loading, setLoading] = useState(true);
    const [nextVideos, setNextVideos] = useState(null);

    useEffect(() => {
        fetchNextVideos(setLoading, setNextVideos);
    }, []);

    if (loading) {
        return (
            <aside className="NextVideos">
                <ClipLoader
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
                .filter((videoItem) => videoItem.id !== currentVideo.id)
                .map((videoItem) => (
                    <NextVideoItem key={videoItem.id} video={videoItem} />
                ))}
        </aside>
    );
}

export default NextVideos;
