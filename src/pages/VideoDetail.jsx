import { useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import VideoInfo from "../components/VideoInfo"
import { useEffect, useState } from "react"
import { GetData } from "../helpers/GetData"
import Loading from "../components/Loading"
import VideoCard from "../components/VideoCard"
import Comments from "../components/Comments"

const VideoDetail = () => {
  const {id} = useParams()
  const [relatedVideos, setRelatedVideos] = useState(null)
  const [comments, setComments] = useState([])


  useEffect(() => {
    setRelatedVideos(null);
    GetData(`/related?id=${id}`)
    .then((res) => setRelatedVideos(res.data.data))
  },[id])

  useEffect(() => {
    GetData(GetData(`/comments?id=${id}`)
    .then((res) => setComments(res.data.data)))
  },[id])


  return (
    <div className="p-4 md:p-6 min-h-screen flex max-lg:flex-col">
      <div className="flex-1">
        <ReactPlayer 
        className={"rounded"} 
        width={'100%'} 
        controls={true} 
        url={`https://www.youtube.com/watch?v=${id}`}/>
        
        <VideoInfo/>
      <div className="max-lg:hidden">
      {comments.map((item) => <Comments i={item} />)}
      </div>
      </div>
      
      <div className="max-md:w-full lg:max-w-[400px] flex flex-col max-lg:my-5 px-3 gap-5">
        {!relatedVideos ? <Loading type={"video"}/> 
        : relatedVideos.map((item) => item.type ==="video" && <VideoCard type="row" video={item}/> )}
      </div>
      
    </div>
  )
}

export default VideoDetail