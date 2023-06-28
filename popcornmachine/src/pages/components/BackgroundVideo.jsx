import React from 'react';
import ReactPlayer from 'react-player';

const BackgroundVideo = () => {

  
  return (
    <div className="background-video">
      <ReactPlayer
        url="public/pexels-vimeo-857134-1280x720-24fps.mp4"
        playing
        loop
        muted
        width="100%"
        height="100%"
        style={{ position: 'relative', top: 1, left: 0 }}
      />
    </div>
  );
};

export default BackgroundVideo;
