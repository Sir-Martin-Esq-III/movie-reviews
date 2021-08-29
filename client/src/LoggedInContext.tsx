import {createContext} from 'react'

interface ILoggedIn{
    //remove the anys
    loggedIn:boolean,
    setloggedIn?:React.Dispatch<React.SetStateAction<boolean>>,
    currentUser?:string,
    setcurrentUser?:React.Dispatch<React.SetStateAction<string>>
}

export const loggedInContext=createContext<ILoggedIn>({loggedIn:false,setloggedIn:undefined,currentUser:"",setcurrentUser:undefined})


