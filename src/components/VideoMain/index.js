import React from 'react';
const VideoMain = () => {
  return (
    <div className='bg-black w-full h-4/5'>
      <video className='w-full h-4/5' src='/video/main.mp4' loop={true} />
    </div>
  );
};

export default VideoMain;
