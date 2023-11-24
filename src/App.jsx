import { BrowserRouter, Route, Routes } from "react-router-dom"
import SearchResult from "./pages/SearchResult"
import Feed from "./pages/Feed"
import VideoDetail from "./pages/VideoDetail"
import Header from "./components/Header"

function App() {

  
  return (
    <BrowserRouter>

    <Header/>
    <Routes>

    <Route path="/" element={<Feed/>}/>
    <Route path="/results" element={<SearchResult/>}/>
    <Route path="/watch/:id" element={<VideoDetail/>}/>


    </Routes>
    </BrowserRouter>
  )
}

export default App
