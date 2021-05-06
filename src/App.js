import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Videos } from "./pages/Videos/Videos";
import { Playlist } from "./pages/Playlist/Playlist";
import { WatchLater } from "./pages/WatchLater/WatchLater";
import { VideoDetails } from "./pages/VideoDetails/VideoDetails";
import { LikedVideos } from "./pages/LikedVideos/LikedVideos";
import { History } from "./pages/History/History";
import { Nav } from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Videos />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/liked-videos" element={<LikedVideos />} />
        <Route path="/video/:videoId" element={<VideoDetails />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
