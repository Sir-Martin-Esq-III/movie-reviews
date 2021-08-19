import {createContext} from 'react'

interface ILoggedIn{
    //remove the anys
    loggedIn:any,
    setloggedIn?:any
}

export const loggedInContext=createContext<ILoggedIn>({loggedIn:false,setloggedIn:""})


