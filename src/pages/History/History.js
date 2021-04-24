import React from "react";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useData } from "../../context/DataContext";

export const History = () => {
  const { state } = useData();
  return (
    <div>
      <h1>This is history page</h1>
      {state.history.map((video) => {
        return (
          <div
            style={{
              display: "inline-flex",
              flexWrap: "wrap",
              margin: "0 1rem",
              width: "30%",
              cursor: "pointer",
            }}
          >
            <VideoCard videoId={video.id} />
          </div>
        );
      })}
    </div>
  );
};
