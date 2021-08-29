import React, { useEffect, useState,useContext } from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios'
import Loading from '../loading/Loading';
import AddCommentComp from './add-comment/AddCommentComp';
import  Comments  from './Comments';
import './movieReview.css'

import {loggedInContext} from '../../LoggedInContext'

import {IMovieData,ParamTypes,Icomment} from '../../types'


interface Props{
}


const colorRatings={
    green:"#53fc72",
    amber:"#fce653",
    red:"#ff6254"
}

export const MoviePage:React.FC<Props>=()=>{
    
    const [movieData,SetmoveieData]=useState<IMovieData>({name:"",imgsrc:"",synopsis:"",rating:"",trailer:"",reviews:[]})
    const [loading,SetLoading]=useState(true)
    let { movieID } = useParams<ParamTypes>()

    const {loggedIn}=useContext(loggedInContext)
    
    const colorRating=(rating:Number)=>{
        if (rating<3){
            return colorRatings.red
        }else if (rating<6){
            return colorRatings.amber
        }else{
            return colorRatings.green
        }
    }
    
      useEffect(() => {
        console.log("Fetching movie data");
        axios({
          method: 'get',
          url: `http://127.0.0.1:8000/API/movieData/${movieID}`
        }).then((res)=>{
            SetmoveieData(res.data[0])
            SetLoading(false)
            console.log(res.data)
         })
      },[movieID])
      //fix any
      const sendCommentsToServer=(newComment:string[][])=>{
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/API/AddComment',
            data: {
              name: movieData.name,
              newComment:newComment
            }
          }).then((res)=>{
          })
          
      }

    return (
        <div className="moviePage">
            {loading && <Loading/>}

            <div className="upper-container">
                <div className="upper-left">
                    <div className="movie-image">
                        <iframe title="title" src={`${movieData.trailer}`} frameBorder="0"></iframe>
                    </div>
                </div>
                <div className="upper-right">
                    <div className="Title">
                        <h1>{movieData.name}</h1>
                    </div>
                    <div className="Synopsis">
                        <p>{movieData.synopsis} </p>
                    </div>
                    <div className="rating">
                        <p><span style={{color:colorRating(parseInt(movieData.rating))}}>{movieData.rating}</span> /10</p>
                    </div>
                    
                </div>
            </div>


            <h1>This is what we had to say about <u>{movieData.name}</u></h1>
            <Comments reviews={movieData.reviews}
                      loggedIn={loggedIn}
                      sendCommentsToServer={sendCommentsToServer}>
            </Comments>
                      
        </div>
    );
}

export default MoviePage