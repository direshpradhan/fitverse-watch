export const initialState= {watchLater:[],liked:[],playlist:[]};

export const reducer = (state,action) =>{
    switch (action.type) {
        case "ADD_TO_WATCH_LATER":
            const isInWatchLater = state.watchLater.find(
                (video) => video.id === action.payload.id
              );
              if (!isInWatchLater) {
                return { ...state, watchLater: [...state.watchLater, action.payload] };
              }
              return state;
    
        case "LIKE_UNLIKE":
            const isInLikedVideos = state.liked.find(
                (video) => video.id === action.payload.id
              );
              if (!isInLikedVideos) {
                return { ...state, liked: [...state.liked, action.payload] };
              }
              return state;  
        
        default:
            break;
    }
}