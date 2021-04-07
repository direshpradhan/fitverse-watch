import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import {Videos} from "./Videos";
import {Playlist} from "./Playlist";
import {WatchLater} from "./WatchLater";

function App() {
  return (
    <div className="App">
      <h1>Video Library</h1>
      
      <Link to="/">Videos</Link>{" "}
      <Link to="/playlist">Playlist</Link>{" "}
      <Link to="/watch-later">WatchLater</Link>

      <Routes>
        <Route path="/" element={<Videos />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watch-later" element={<WatchLater/>} />
      </Routes>
    </div>
  );
}

export default App;
