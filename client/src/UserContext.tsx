import {createContext} from 'react'

interface IUser{
    username:string,
    setusername?:any
}

export const UserContext=createContext<IUser>({username:"",setusername:""})


