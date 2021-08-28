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
import { UserContext } from './UserContext';

export const App:React.FC=()=>{
  //Login default should be false
  const [loggedIn, setloggedIn] = useState(true)
  const [currentUser, setcurrentUser] = useState("this is a test")

  return (
    <div className="app">
    <loggedInContext.Provider value={{loggedIn,setloggedIn,currentUser,setcurrentUser}}>
    <Router>
      <Header/>
      <Switch>
        <Route path="/home">
            <Home/>
          </Route>
        <Route path="/login/addmovie">
            <Login/>
        </Route>
          <Route path="/:movieID">
              <MoviePage/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
      </Switch>
    </Router>
    </loggedInContext.Provider>
    </div>  
  );
}

export default App;
