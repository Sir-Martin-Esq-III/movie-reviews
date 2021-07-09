import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Movie from './components/movie-card/Movie';
import movieJson from './films.json'
import MoviePage from './components/movie-page/Movie-page'
import axios from 'axios'

import firebase from 'firebase';
import 'firebase/firestore'


import {DocumentDataHook, useCollectionData} from 'react-firebase-hooks/firestore'



// firebase.initializeApp({
//   apiKey: "AIzaSyBgvVrb5519-fykonbZOKeAdwq5e_JXpO4",
//   authDomain: "movie-reviews-b76cf.firebaseapp.com",
//   databaseURL: "https://movie-reviews-b76cf-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "movie-reviews-b76cf",
//   storageBucket: "movie-reviews-b76cf.appspot.com",
//   messagingSenderId: "401773917647",
//   appId: "1:401773917647:web:d73143c850d70aa45aceba",
//   measurementId: "G-1PYYDQBTPJ"

// })
//const firestore=firebase.firestore()

//const movieDB:{id:string,data:any}[]=[]

//const [movies ,setmovies]=useState([])

// const fetchMovies=async () => {
//   const res=firestore.collection("movies")
//   const data=await res.get()
//   data.docs.forEach(item=>{
//     setmovies([...movies,item])
//   })
  
// }



///console.log(movieDB);

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
    <div className="App">
      <MoviePage name={data[0].name}rating={data[0].rating} synopsis={data[0].SynopsisFull} imgsrc={data[0].imgsrc}/>
  
      <div className="movies-container">
        {movieData.map((list:movieItems)=>
            <Movie key={list.id} name={list.name}rating={list.rating} synopsis={list.Synopsis} imgsrc={list.imgsrc}/>

        )}

        
      </div>

      
    </div>
  );
}

export default App;
