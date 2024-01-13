import React from 'react';

const VideoComponent = ({youtubeUrl}) => {
 
  return (
    <div className=' w-full'>
  <iframe
  // https://player.vimeo.com/video/882038881?h=533395ab0e&title=0&byline=0
    src={`https://player.vimeo.com/video/${youtubeUrl}?autoplay=1&loop=1&muted=1&controls=0`}
    width="1000"
    height="1000"
    className='  w-full h-[200px] md:h-[520px]  lg:h-[510px] xl:h-[600px] xln:h-[630px]  xxl:h-[850px] object-cover'
    
    frameborder="0"
    allow="autoplay;"
  ></iframe>
</div>
  
  );
}; 

export default VideoComponent;
