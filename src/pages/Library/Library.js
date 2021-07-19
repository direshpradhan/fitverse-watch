import React from "react";
import { useNavigate } from "react-router";
import { BottomNav } from "../../components/BottomNav/BottomNav";
// import styles from "./Library.module.css";

export const Library = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ul>
        <li onClick={() => navigate("/history")}>History</li>
        <li onClick={() => navigate("/playlist")}>Playlist</li>
        <li onClick={() => navigate("/watch-later")}>Watch Later</li>
        <li onClick={() => navigate("/liked-videos")}>Liked Videos</li>
      </ul>
      <BottomNav />
    </div>
  );
};
