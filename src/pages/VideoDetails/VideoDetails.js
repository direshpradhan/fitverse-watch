import React, { useState } from 'react'
import { useParams } from 'react-router';
import { useData } from '../../context/DataContext';
import {videos} from '../../videosDB'

export const VideoDetails = () => {
    const {videoId} = useParams();
    const [showPlaylistModal,setShowPlaylistModal] = useState(false);
    const [playlistName,setPlaylistName] = useState("");
    const {state,dispatch} = useData();
    const video = videos.find(video=>video.id === videoId);
    const { id,title } = video;
    
    return (
        <div style={{width:"75%",height:"550px"}}>
            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen" allowAutoplay="autoplay"></iframe>
            <h2 style={{textAlign:"left"}}>{title}</h2>
            <button onClick={()=>dispatch({type:"ADD_TO_WATCH_LATER",payload:video})}>Watch Later</button>
            <button onClick={()=>dispatch({type:"LIKE_UNLIKE",payload:video})}>Like</button>
            <button onClick={()=>setShowPlaylistModal(state=>!state)}>Add to Playlist</button>
            {showPlaylistModal&& 
                <div>
                    {state?.playlist?.map(playlistItem=>{
                        return (
                            <div>
                                <label>
                                    {console.log(playlistItem.videos.find(videoId=>videoId===id))}
                                    <input 
                                    onChange={()=> dispatch({type:"ADD_TO_PLAYLIST",payload:{playlistId:playlistItem.id,videoId:id}})} 
                                    type="checkbox" 
                                    checked={playlistItem.videos.find(playlistVideo=>playlistVideo===id)?true:false} />
                                    {playlistItem.name}
                                </label>
                                
                            </div>
                        )
                    })} 
                    <input onChange={(event)=>setPlaylistName(event.target.value)} type="text" />
                    <button onClick={()=>dispatch({type:"CREATE_PLAYLIST",payload:{playlistName,videoId:id}})}>Add</button>
                </div>
            }
        </div>
    )
}
