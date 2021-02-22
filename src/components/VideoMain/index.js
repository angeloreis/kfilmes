import React from 'react';
const VideoMain = () => {
  return (
    <div className='flex flex-row w-full left-0 right-0 align-baseline justify-center rounded-3xl p-5'>
      <video src='/video/main.mp4' loop={true} autoPlay={true} />
    </div>
  );
};

export default VideoMain;
