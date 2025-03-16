    import {createContext, useContext, useEffect, useState} from 'react'

    export const AuthContext = createContext();

    export const AuthProvider = ({children}) => {

    const [token,setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState("")


    //store token in localstorage
    const storeToken = (token) => {
        setToken(token)
        return localStorage.setItem("token",token)
    }
    let isLoggedin = !!token

    //logout functionality
    const LogoutUser = ()=>{
        setToken("");
        return localStorage.removeItem("token")
    }

    //get user data from backend
    const userAuthentication = async ()=>{
        try {
            const response = await fetch(`http://localhost:8080/api/auth/user`,{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`
                },
            })
            if(response.ok){
                const data = await response.json()
                setUser(data.userData)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        userAuthentication();
    },[])



        return (<AuthContext.Provider value={{isLoggedin,LogoutUser,storeToken,user}}>
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