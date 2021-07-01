import React from 'react';
import './movieReview.css'

interface Props{
    name:string,
    imgsrc?:string,
    rating:number,
    synopsis?:string    
    reviews?:[{
        username:string,
        userRating:number,
        reviewContent:string
    }]
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

export const MoviePage:React.FC<Props>=({name,imgsrc,rating,synopsis,reviews})=>{
    return (
        <div className="moviePage">
            <div className="movie-image">
                <img src={imgsrc} alt={`${name} movie poster`} />
            </div>
            <div className="rating">
                <p>{rating} /10</p>
            </div>
            <div className="Synopsis">
                <p>{synopsis} </p>
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