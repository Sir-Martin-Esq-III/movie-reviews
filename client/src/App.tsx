import React ,{useState,useContext} from 'react';
import './App.css';
import MoviePage from './components/movie-page/Movie-page'

import Home from './components/home/Home';
import Header from './components/header/Header';
import Addmovie from './components/add-movie/Add-movie';
import Login from './components/userinfo/login/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { loggedInContext } from './LoggedInContext';

export const App:React.FC=()=>{
  const [loggedIn, setloggedIn] = useState(false)

 


  return (
    <div className="app">
    <Router>
      <loggedInContext.Provider value={loggedIn}>
        <Header/>
      </loggedInContext.Provider>
    <Switch>
    <Route path="/login/addmovie">
        <Login/>
      </Route>
      <Route path="/:movieID">
        <loggedInContext.Provider value={loggedIn}>
          <MoviePage/>
        </loggedInContext.Provider>
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
