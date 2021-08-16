import React, { useEffect, useState } from 'react';
import Movie from '../movie-card/Movie';
import Loading from '../loading/Loading';
import axios from 'axios'
import './home-style.css'

type movieItems={
  id:number,
  name:string,
  synopsis:string,
  imgsrc:string,
  rating:number
}

interface Props{
}
export const Home:React.FC<Props>=()=> {
    const [movieData,SetmoveieData]=useState([])
    const [loading,SetLoading]=useState(true)
    const FetchMovieData=()=>{
      console.log("Fetching movie data");
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/API/movieData'
    }).then((res)=>{
      SetmoveieData(res.data)
      SetLoading(false)
      console.log(res.data)
    })
  }
    //On page load fetch the movie data
    useEffect(() => {
      FetchMovieData()
    }, [])
  

    return (
      
        <div className="movies-container">
          {loading && <Loading/>}
          {movieData.map((list:movieItems)=>        
              <Movie key={list.id} name={list.name}rating={list.rating} synopsis={list.synopsis.slice(0,150)+"..."} imgsrc={list.imgsrc}/>
          )}        
        </div>  
    )
}

export default Home;