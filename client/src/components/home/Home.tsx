import React, { useEffect, useState } from 'react';
import Movie from '../movie-card/Movie';
import axios from 'axios'

import {Link} from "react-router-dom";

type movieItems={
  
  id:number,
  name:string,
  Synopsis:string,
  imgsrc:string,
  rating:number
}



interface Props{

}
export const Home:React.FC<Props>=()=> {

    const [movieData,SetmoveieData]=useState([])

    const FetchMovieData=()=>{
      console.log("Fetching movie data");
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/API/movieData'
    }).then((res)=>{
      SetmoveieData(res.data)
      console.log(res.data)
    })
  }
  
    //On page load fetch the movie data
    useEffect(() => {
      FetchMovieData()
    }, [])
  
  
    return (
        <div className="movies-container">
          {movieData.map((list:movieItems)=>        
              <Movie key={list.id} name={list.name}rating={list.rating} synopsis={list.Synopsis} imgsrc={list.imgsrc}/>
          )}        
        </div>  
    )
}

export default Home;