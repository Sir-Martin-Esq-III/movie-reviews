import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Movie from './components/movie-card/Movie';
import movieJson from './films.json'
import MoviePage from './components/movie-page/Movie-page'
import axios from 'axios'
import Home from './components/home/Home';
import Header from './components/header/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


type movieItems={
  
  id:number,
  name:string,
  Synopsis:string,
  imgsrc:string,
  rating:number
}

const filmJson:string=JSON.stringify(movieJson)
let data=JSON.parse(filmJson)

//console.log(data)

export const App:React.FC=()=>{

  return (
    <div>
    
    <Router>
    <Header/>
    <Switch>
      <Route path="/Luca">
        <MoviePage name={data[0].name}rating={data[0].rating} synopsis={data[0].SynopsisFull} imgsrc={data[0].imgsrc}/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>
  </Router>
  </div>
  
  
  );
}

export default App;
