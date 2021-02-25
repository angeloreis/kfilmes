import React from 'react';
const VideoMain = () => {
  return (
    <div className='p-5'>
      <video autoPlay={true} loop={true}>
        <source src='/video/main.mp4' type='video/mp4' />
      </video>
    </div>
  );
};

export default VideoMain;
