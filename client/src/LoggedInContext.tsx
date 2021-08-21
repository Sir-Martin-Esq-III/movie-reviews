import {createContext} from 'react'

interface ILoggedIn{
    //remove the anys
    loggedIn:any,
    setloggedIn?:any
    currentUser?:string
}

export const loggedInContext=createContext<ILoggedIn>({loggedIn:false,setloggedIn:"",currentUser:""})


