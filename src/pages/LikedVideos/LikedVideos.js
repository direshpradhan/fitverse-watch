import React from 'react';
import { useData } from '../../context/DataContext';

export const LikedVideos = () => {
    const {state} = useData();

    return (
        <div>
            <h1>This is watch later</h1>
            {state.liked.map(video=>{
                    return (
                        <div style={{display:"flex",flexDirection:"column",margin:"1rem 0",width:"30%"}}>
                            <img width="95%" src={video.image} alt="Thumbnail" />
                            <div style={{alignText:"center",width:"90%",margin:"0 auto",flexGrow:1}}>{video.title}</div> 
                        </div>
                    );
                })}

        </div>
    )
}