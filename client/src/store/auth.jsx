import {createContext, useContext, useState} from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

const [token,setToken] = useState(localStorage.getItem("token"))

const storeToken = (token) => {
    return localStorage.setItem("token",token)
}
let isLoggedin = !!token
const LogoutUser = ()=>{
    setToken("");
    return localStorage.removeItem("token")
}

    return (<AuthContext.Provider value={{isLoggedin,LogoutUser,storeToken}}>
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