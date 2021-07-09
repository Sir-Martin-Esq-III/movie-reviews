import express from 'express';
import cors from 'cors'
//import movieData from './static/movieData.json'
const app = express()
const port = 8000

import fs from 'fs'

let rawdata = fs.readFileSync('./static/movieData.json')
let data = JSON.parse(rawdata);


app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/API/movieData/:name?',(req,res)=>{
    if (req.params.name==="LUCA"){
        console.log("luca")
    }
})

app.get('/API/movieData', (req, res) => {
  res.json(data)
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})