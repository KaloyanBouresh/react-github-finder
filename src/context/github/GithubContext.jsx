import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    };

    const [state, dispatch] = useReducer(githubReducer, initialState);

    return <GithubContext.Provider value={{
        ...state, // can replace
        // users: state.users,
        // loading: state.loading,
        // user: state.user,
        // repos: state.repos,
        dispatch,
    }}>
        {children}
    </GithubContext.Provider>
};

export default GithubContext