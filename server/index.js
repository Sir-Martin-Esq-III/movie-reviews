import express, { response } from 'express';
import cors from 'cors'
import MovieDetails from "./moviedata.js"
import UserInfo from './userinfo.js';
import bodyParser from 'body-parser';
import mongoose from "mongoose"
const app = express()
const port = 8000


app.use(bodyParser.json())

//HARDCODED USERNAME/PWHASH
const usr="Tom98"
const pwHash="fd37ca5ca8763ae077a5e9740212319591603c42a08a60dcc91d12e7e457b024f6bdfdc10cdc1383e1602ff2092b4bc1bb8cac9306a9965eb352435f5dfe8bb0"




//DB STUFF
const DBURI='mongodb+srv://test:test123@cluster0.mhzkd.mongodb.net/movie-data?retryWrites=true&w=majority'

mongoose.connect(DBURI,{useNewUrlParser:true,dbName:"movie-data", useUnifiedTopology:true})
  .then((res)=>{app.listen(port)})
  .catch((err)=>console.log(err))

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})



//API to fetch data on any movie
app.get('/API/movieData/:nameID',(req,res)=>{
  const name=req.params.nameID
  console.log(name);
  MovieDetails.find({name:name}).exec()
  .then((response)=>{
    console.log(response);
    res.send(response)
  }).catch((err)=>console.log(err)) 
 })


app.get('/API/movieData', (req, res) => {
  MovieDetails.find()
  .then((response)=>{
    res.json(response)
  })
})

app.post('/API/addMovie',(req,res)=>{
  console.log(req.config);
  res.send("Vaild movie sent")
})

app.post('/user/Login',(req,res)=>{
  UserInfo.find({username:req.body.username}).exec()
  .then((response)=>{
    response[0].pwhash===req.body.pw?res.send(true):res.send(false)
  }).catch(()=>res.send(false)) 
})

