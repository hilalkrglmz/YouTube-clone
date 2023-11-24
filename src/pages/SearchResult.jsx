import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { GetData } from "../helpers/GetData"
import Sidebar from "../components/Sidebar"
import Loading from "../components/Loading"
import VideoCard from "../components/VideoCard"

const SearchResult = () => {

const [searchParams,setSearchParams] = useSearchParams()
const [results, setResults] = useState(null)

const query = searchParams.get("search_query")


useEffect(() => {
 GetData(`/search?query=${query}`)
 .then((res) => setResults(res.data.data))
},[query])

  return (
<div className="flex">
    <Sidebar/>
    <div className="flex flex-col gap-5 px-5">
      <h2>{query} için sonuçlar:</h2>
      {
        !results ? <Loading type={video}/> 
        : results.map((item) => item.type === "video" && <VideoCard type={"deneme"} video={item}/>)
      }
    </div>
  </div>
  )
}

export default SearchResult