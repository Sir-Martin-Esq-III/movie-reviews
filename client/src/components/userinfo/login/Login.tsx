import React ,{useState,useRef,useEffect}from 'react'
import hasha from 'hasha'
import axios from 'axios'

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const pwRef = useRef<HTMLInputElement>(null)

    const onSubmit=(e: React.MouseEvent<HTMLInputElement, MouseEvent>)=>{
        e.preventDefault()
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/user/Login',
            data: {
              username: username,
              pw: hasha(password)
            }
          });
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

    return (
        <div>
            <h1 className="greeting">Hello, welcome back please login</h1>       
            <form>
                <label htmlFor="username"> Username:</label>
                <input type="text" name="username" id="username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                   
                <label htmlFor="pw">Password: </label>
                <input ref={pwRef} type="password" name="pw" id="pw" value={password} onChange={(e)=>setPassword(e.target.value)}/>  
                <img src="https://static.thenounproject.com/png/819130-200.png" alt="toggle password show"  onClick={()=>setShowPassword(!showPassword)}/>  

                <input type="button" value="Login"  onClick={(e)=>onSubmit(e)}/>

                
            </form>     
            <h1>{`${username}, ${password}`}</h1>
        </div>
    )
}
