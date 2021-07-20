import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios'
import './movieReview.css'

interface Props{
}

interface IMovieData{
    name:string,
    imgsrc:string,
    synopsis:string,
    rating:string
}

interface ParamTypes {
    movieID: string
}


const colorRatings={
    green:"#53fc72",
    amber:"#fce653",
    red:"#ff6254"
}



const review=[
    {
    id:0,
    username:"USER 1",
    userRating:9,
    ReviewContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque natus reprehenderit vero voluptatibus! Ipsum aspernatur illum saepe repudiandae, suscipit ducimus! Non, error animi! Delectus qui voluptatibus quia incidunt aliquid libero, accusantium repellat nulla animi modi ex amet dolor ad accusamus tempore corrupti non quo rerum. Nulla tenetur quisquam perferendis?"
    },
    {
    id:1,
    username:"USER 2",
    userRating:9,
    ReviewContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatibus vitae amet laborum dolor cupiditate quaerat libero neque voluptas eum?"
    },
    {
    id:2,
    username:"USER 3",
    userRating:7,
    ReviewContent: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam velit voluptatibus nesciunt."
    },
]

export const MoviePage:React.FC<Props>=()=>{

    //const [movieData,SetmoveieData]=useState<MovieData>({name,imgsrc,synopsis,rating})
    const [movieData,SetmoveieData]=useState<IMovieData>({name:"",imgsrc:"",synopsis:"",rating:""})
    let { movieID } = useParams<ParamTypes>()
    
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
            console.log(res.data)
         })
      },[movieID])

      

    return (
        <div className="moviePage">
            <div className="movie-image">
                <iframe width="100%" height="500px"  title="title" src="https://www.youtube.com/embed/mYfJxlgR2jw" frameBorder="0"></iframe>
                {/* <img src={movieData.imgsrc} alt={`${movieData.name} movie poster`} /> */}
            </div>
            <div className="rating">
                <p><span style={{color:colorRating(parseInt(movieData.rating))}}>{movieData.rating}</span> /10</p>
            </div>
            <div className="Synopsis">
                <p>{movieData.synopsis} </p>
            </div>
            <div className="review-container">

                {review.map((rev)=>
                    <div className="reviews" key={rev.id}>
                        <div className="reviewLeft">
                            <h3>{rev.username}</h3>
                            <p>{rev.userRating}</p>
                        </div>
                        <div className="reviewsRight">
                            <p>{rev.ReviewContent}</p>
                        </div>
                    </div>
                )}
            </div> 
            <div className="add-review">
            </div>             
        </div>
    );
}

export default MoviePage