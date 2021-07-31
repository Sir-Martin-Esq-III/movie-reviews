import express, { response } from 'express';
import cors from 'cors'
import MovieDetails from "./moviedata.js"

import mongoose from "mongoose"
const app = express()
const port = 8000


import fs from 'fs'

let rawdata = fs.readFileSync('./static/movieData.json')
let data = JSON.parse(rawdata);
//DB STUFF
const DBURI='mongodb+srv://test:test123@cluster0.mhzkd.mongodb.net/movie-data?retryWrites=true&w=majority'

mongoose.connect(DBURI,{useNewUrlParser:true,dbName:"movie-data", useUnifiedTopology:true})
  .then((res)=>{app.listen(port)})
  .catch((err)=>console.log(err))

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//Test endpoint 
app.get('/test',(req,res)=>{
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

