import React, { useEffect, useState,useContext } from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios'
import Loading from '../loading/Loading';
import AddCommentComp from './add-comment/AddCommentComp';
import './movieReview.css'

import {loggedInContext} from '../../LoggedInContext'


interface Props{
}

interface IMovieData{
    name:string,
    imgsrc:string,
    synopsis:string,
    rating:string,
    trailer:string,
    reviews:[]
}

interface ParamTypes {
    movieID: string
}

interface Icomment{
    id:number,
    username:string,
    userRating:number,
    ReviewContent:string
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
    
      //On page load fetch the movie data
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

      const updateComments=(newComment:Icomment)=>{
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/API/AddComment',
            data: {
              name: movieData.name,
              newComment:[...movieData.reviews,[["Tom98"],[newComment]]]
            }
          }).then((res)=>{
              movieData.reviews=
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


            <div className="review-container">
                {movieData.reviews.length<1&&<h3>Huh, There are now reviews here, Be the first?</h3>}
                {movieData.reviews.map((rev)=>
                    <div className="reviews" key={rev[0]}>
                        <div className="reviewLeft">
                            <h3>{rev[0]}</h3>
                        </div>
                        <div className="reviewsRight">
                            <p>{rev[1]}</p>
                        </div>
                    </div>
                )}
                {/* PLEASE REMOVE THIS WITH SOMETHING DECENT FOR ONCE */}
                <h1>{loggedIn?<AddCommentComp updateComments={updateComments}/>:"please log in to comment"}</h1>
            </div> 
            <div className="add-review">
            </div>             
        </div>
    );
}

export default MoviePage