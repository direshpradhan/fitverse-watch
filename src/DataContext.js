import { createContext, useContext, useReducer } from "react";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

const initialState= {watchLater:[]};

export const DataContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <DataContext.Provider value={{state,dispatch}}>
            {children}
        </DataContext.Provider>
    )
}

const reducer = (state,action) =>{
    switch (action.type) {
        case "ADD_TO_WATCH_LATER":
            const isInWatchLater = state.watchLater.find(
                (video) => video.id === action.payload.id
              );
              if (!isInWatchLater) {
                return { ...state, watchLater: [...state.watchLater, action.payload] };
              }
              return state;
            break;
    
        default:
            break;
    }
}