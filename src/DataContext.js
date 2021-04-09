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
    
}