import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Videos } from "./pages/Videos/Videos";
import { PlaylistListing } from "./pages/Playlist/PlaylistListing";
import { WatchLater } from "./pages/WatchLater/WatchLater";
import { VideoDetails } from "./pages/VideoDetails/VideoDetails";
import { LikedVideos } from "./pages/LikedVideos/LikedVideos";
import { History } from "./pages/History/History";
import { Nav } from "./components/Nav/Nav";
import { Library } from "./pages/Library/Library";
import { PlaylistDetails } from "./pages/Playlist/PlaylistDetails";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Videos />} />
        <Route path="/playlist" element={<PlaylistListing />} />
        <Route path="playlist/:playlistId" element={<PlaylistDetails />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/liked-videos" element={<LikedVideos />} />
        <Route path="/video/:videoId" element={<VideoDetails />} />
        <Route path="/history" element={<History />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </div>
  );
}

export default App;
