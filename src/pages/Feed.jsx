import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar';
import { YoutubeContext } from '../context/youtubeContext';
import Loading from '../components/Loading';
import VideoCard from '../components/VideoCard';

const Feed = () => {
const { videos }= useContext(YoutubeContext)
console.log(videos)

  return (
    <div className='flex gap-4'>
        <Sidebar/>
       <div className='videos'>
       {!videos ? 
        (<Loading type={"video"}/>) 
        : 
        (videos.map((item) => (item.type ==='video' && <VideoCard video={item} key={item.videoId}/>)))}</div>        
    </div>
  )
}

export default Feed;