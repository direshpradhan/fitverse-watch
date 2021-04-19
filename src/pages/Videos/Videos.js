import React from 'react';
import {videos} from "../../videosDB";
import {VideoCard} from "../../components/VideoCard/VideoCard";

export const Videos = () => {

    return (
        <div>
            <h1>This is video page.</h1>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",cursor:"pointer"}}>
                {videos.map(video=>{
                    return (
                        <div style={{display:"flex",flexDirection:"column",margin:"1rem 0",width:"30%"}}>
                            <VideoCard videoId={video.id}/>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}