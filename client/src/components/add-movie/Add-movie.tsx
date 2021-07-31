import React, { ReactElement, useState } from 'react'
import axios from 'axios'
import { error } from 'console'

interface Props {
    
}

type data={
    name:string,
    imgsrc:string,
    synopsis:string,
    rating:string,
    trailer:string

}
//This is  going to be a form where a trusted user can add a movie to the database
export  const  Addmovie:React.FC<Props>=()=>{

    const [name, setName] = useState("")
    const [imgsrc, setImg] = useState("")
    const [synopsis, setSyn] = useState("")
    const [rating, setRating] = useState("")
    const [trailer, setTrailer] = useState("")

    
    //Submit data to server
    const sumbitHandler= ()=>{
        console.log(name,imgsrc,synopsis,rating,trailer);
        const reqData:data={
            name:name,
            imgsrc:imgsrc,
            synopsis:synopsis,
            rating:rating,
            trailer:trailer
        }

        axios.post("http://127.0.0.1:8000/API/addMovie",{
            data:reqData
        })
        .then((res)=>{
            console.log(res);
            
        }).catch((err)=>{
            console.error(err)
        })
        
        
        
    }


    return (
        <div style={{display:'flex',alignItems:'center', width:"100vw", height:"100vh"}}>
            {/* <form action="http://127.0.0.1:8000/API/addMovie" method="post"> */}
                <label htmlFor="name">Movie Name:</label>
                <input type="text" name="name" id="name" onChange={(e)=>{setName(e.target.value)}} />

                <label htmlFor="imgsrc">Image Source:</label>
                <input type="text" name="imgsrc" id="imgsrc" onChange={(e)=>{setImg(e.target.value)}} />

                <label htmlFor="synopsis">Movie Synopsis:</label>
                <input type="text" name="synopsis" id="synopsis" onChange={(e)=>{setSyn(e.target.value)}}  />

                <label htmlFor="rating">Movie rating:</label>
                <input type="text" name="rating" id="rating" onChange={(e)=>{setRating(e.target.value)}} />

                <label htmlFor="trailer">Movie trailer:</label>
                <input type="text" name="trailer" id="trailer" onChange={(e)=>{setTrailer(e.target.value)}}  />
                
               
                <button type="submit" onClick={sumbitHandler}>Submit</button>
            {/* </form> */}
            
        </div>
    )
}


export default Addmovie