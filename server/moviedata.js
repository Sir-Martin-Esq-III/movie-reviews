import mongoose from "mongoose";
const Schema= mongoose.Schema


const movieDetailSchema= new Schema({
    name: {type:String,required:true},
    imgsrc:{type:String,required:true},
    synopsis:{type:String,required:true},
    rating:{type:String,required:false},
    trailer:{type:String,required:false},
    reviews:{type:Array,required:false},

})

const MovieDetails=mongoose.model('movie',movieDetailSchema)

export default MovieDetails