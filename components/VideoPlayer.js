import React, { useState } from 'react';

const VideoPlayer = ({ videoSrc }) => {
    const [playing, setPlaying] = useState(false);

    const handlePlay = () => {
        setPlaying(true);
    }

    const handlePause = () => {
        setPlaying(false);
    }

    return (
        <div>
            <video controls onPlay={handlePlay} onPause={handlePause}>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoPlayer;
