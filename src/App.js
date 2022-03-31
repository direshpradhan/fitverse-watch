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
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { Login } from "./pages/Login/Login";
import { Signup } from "./pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Videos />} />
        <Route path="/video/:videoId" element={<VideoDetails />} />
        <Route path="/library" element={<Library />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <PrivateRoute path="/playlist" element={<PlaylistListing />} />
        <PrivateRoute
          path="playlist/:playlistId"
          element={<PlaylistDetails />}
        />
        <PrivateRoute path="/watch-later" element={<WatchLater />} />
        <PrivateRoute path="/liked-videos" element={<LikedVideos />} />
        <PrivateRoute path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
