import React from 'react';
import ReactPlayer from 'react-player';

const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <ReactPlayer
        url="https://player.vimeo.com/video/121097470?h=e3506ba6f1"
        playing
        loop
        muted
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
    </div>
  );
};

export default BackgroundVideo;
