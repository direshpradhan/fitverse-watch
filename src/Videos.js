import React from 'react';
import {videos} from "./videosDB";


export const Videos = () => {
    return (
        <div>
            <h1>This is video page.</h1>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
                {videos.map(video=>{
                    return (
                        <div style={{margin:"1rem 0",width:"30%"}}>
                            <img width="95%" src={video.image} />
                            <div style={{alignText:"center",width:"90%",margin:"0 auto"}}>{video.title}</div> 
                        </div>
                    );
                })}
            </div>
        </div>
    )
}