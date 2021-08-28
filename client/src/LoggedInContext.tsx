import {createContext} from 'react'

interface ILoggedIn{
    //remove the anys
    loggedIn:boolean,
    setloggedIn?:any,
    currentUser?:string,
    setcurrentUser?:any
}

export const loggedInContext=createContext<ILoggedIn>({loggedIn:false,setloggedIn:"",currentUser:"",setcurrentUser:""})


