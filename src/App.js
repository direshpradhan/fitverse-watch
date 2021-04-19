import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import {Videos} from "./pages/Videos/Videos";
import {Playlist} from "./pages/Playlist/Playlist";
import {WatchLater} from "./pages/WatchLater/WatchLater";
import { VideoDetails } from './pages/VideoDetails/VideoDetails';
import { LikedVideos } from './pages/LikedVideos/LikedVideos';

function App() {
  return (
    <div className="App">
      <h1>Video Library</h1>
      
      <Link to="/">Videos</Link>{" "}
      <Link to="/playlist">Playlist</Link>{" "}
      <Link to="/watch-later">WatchLater</Link>{" "}
      <Link to="/liked-videos">Like</Link>

      <Routes>
        <Route path="/" element={<Videos />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watch-later" element={<WatchLater/>} />
        <Route path="/liked-videos" element={<LikedVideos />} />
        <Route path="/video/:videoId" element={<VideoDetails />} />
      </Routes>
    </div>
  );
}

export default App;
