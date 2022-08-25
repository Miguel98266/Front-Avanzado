import { createContext } from "react"

const AuthContext=createContext();

const AuthProvider = (props) => {

    
    return( <AuthProvider.Provider value={props}> {props.children} </AuthProvider.Provider>);
   
}

export default Auth
