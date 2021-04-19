import React from 'react'
import { Link } from 'react-router-dom';
import {videos} from '../../videosDB';

export const VideoCard = ({videoId}) => {
    const video = videos.find(video=>video.id === videoId);
    const { id,title,image } = video;
    
    return (
        <Link to={`/video/${id}`} style={{width:"100%",height:"100%"}}> 
                <img width="100%" src={image} alt="Thumbnail" />
                <div style={{alignText:"center",width:"90%",margin:"0 auto",flexGrow:1}}>{title}</div> 
        </Link>
    )
}
