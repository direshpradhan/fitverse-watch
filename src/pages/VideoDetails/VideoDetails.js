import React from 'react'
import { useParams } from 'react-router';
import { useData } from '../../context/DataContext';
import {videos} from '../../videosDB'

export const VideoDetails = () => {
    const {videoId} = useParams();
    const {dispatch} = useData();
    const video = videos.find(video=>video.id === videoId);
    const { id,title } = video;
    
    return (
        <div style={{width:"75%",height:"550px"}}>
            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>
            <h2 style={{textAlign:"left"}}>{title}</h2>
            <button onClick={()=>dispatch({type:"ADD_TO_WATCH_LATER",payload:video})}>Watch Later</button>
            <button onClick={()=>dispatch({type:"LIKE_UNLIKE",payload:video})}>Like</button>
            <button>Add to Playlist</button>
        </div>
    )
}
