import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <DataContext.Provider value={{state,dispatch}}>
            {children}
        </DataContext.Provider>
    )
}

