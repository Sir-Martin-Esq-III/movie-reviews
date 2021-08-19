import React ,{useState,useRef,useEffect,useContext}from 'react'
import hasha from 'hasha'
import axios from 'axios'
import './login.css'
import {loggedInContext} from '../../../LoggedInContext'

import {
   Redirect
  } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [failedLogIn, setfailedLogIn] = useState(false)

    const pwRef = useRef<HTMLInputElement>(null)

    const {loggedIn,setloggedIn}=useContext(loggedInContext)


    const onSubmit=(e: React.MouseEvent<HTMLInputElement, MouseEvent>)=>{
        e.preventDefault()
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/user/Login',
            data: {
              username: username,
              pw: hasha(password)
            }
          }).then((res)=>{
              const valid=res.data
              valid?
                setloggedIn(!loggedIn)
                :setfailedLogIn(true) 
          })
        console.log(`${username}, ${hasha(password)}`);
        
    }
    
    //SideEffect for showing and hiding password
    useEffect(() => {
        if (pwRef.current!==null){
            showPassword?
                pwRef.current.type="text":
                pwRef.current.type="password"
        }      
    }, [showPassword])

    if(loggedIn){
        return(
            <Redirect to='/home'>

            </Redirect>
        )
    }


    return (
        
        <div className="login-container">    
            <form>
                <label htmlFor="username"> Username:</label>
                <input type="text" name="username" id="username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                <div className="login-row">
                    <label htmlFor="pw">Password: </label>
                    <input ref={pwRef} type="password" name="pw" id="pw" value={password} onChange={(e)=>setPassword(e.target.value)}/>  
                    <img src="https://static.thenounproject.com/png/819130-200.png" alt="toggle password show"  onClick={()=>setShowPassword(!showPassword)}/>  
                </div>

                <input type="button" value="Login"  onClick={(e)=>onSubmit(e)}/>

                
            </form>     
        </div>
    )
}
