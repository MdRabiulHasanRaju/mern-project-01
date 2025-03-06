import {createContext, useContext} from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

const storeToken = (token) => {
    return localStorage.setItem("token",token)
}

    return (<AuthContext.Provider value={{storeToken}}>
        {children}
    </AuthContext.Provider>)
}

export const useAuth = () => {
    const AuthContexValue = useContext(AuthContext)
    if(!AuthContexValue){
        throw new Error("useAuth used outside of provider")
    }
    return AuthContexValue;
}