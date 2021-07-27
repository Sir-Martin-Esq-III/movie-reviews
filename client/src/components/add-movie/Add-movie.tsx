import React, { ReactElement } from 'react'

interface Props {
    
}
//This is  going to be a form where a trusted user can add a movie to the database
export  const  Addmovie:React.FC<Props>=()=>{

    return (
        <div style={{display:'flex',alignItems:'center', width:"100vw", height:"100vh"}}>
            <form action="http://127.0.0.1:8000/API/addMovie" method="post">
                <label htmlFor="name">Movie Name:</label>
                <input type="text" name="name" id="name" />

                <label htmlFor="imgsrc">Image Source:</label>
                <input type="text" name="imgsrc" id="imgsrc" />

                <label htmlFor="synopsis">Movie Synopsis:</label>
                <input type="text" name="synopsis" id="synopsis" />

                <label htmlFor="rating">Movie rating:</label>
                <input type="text" name="rating" id="rating" />

                <label htmlFor="trailer">Movie trailer:</label>
                <input type="text" name="trailer" id="trailer" />
                
               
                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}


export default Addmovie