import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Movie from './components/movie-card/Movie';
import movieJson from './films.json'


type movieItems={
  
  id:number,
  name:string,
  Synopsis:string,
  imgsrc:string,
  rating:number
}

const filmJson:string=JSON.stringify(movieJson)
let data=JSON.parse(filmJson)

console.log(data)

export const App:React.FC=()=>{
  return (
    <div className="App">
  
      <div className="movies-container">
        {data.map((list:movieItems)=>
            <Movie name={list.name}rating={list.rating} synopsis={list.Synopsis} imgsrc={list.imgsrc}/>

        )}
      </div>
    </div>
  );
}

export default App;
