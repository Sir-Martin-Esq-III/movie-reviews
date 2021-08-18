import React from 'react';
import './App.css';
import MoviePage from './components/movie-page/Movie-page'

import Home from './components/home/Home';
import Header from './components/header/Header';
import Addmovie from './components/add-movie/Add-movie';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export const App:React.FC=()=>{

  return (
    <div className="app">
    <Router>
    <Header/>
    <Switch>
    <Route path="/login/addmovie">
        <Addmovie/>
      </Route>
      <Route path="/:movieID">
        <MoviePage/>
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
