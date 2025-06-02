require('dotenv').config()
const express  = require('express')
const connectDB = require('./db/connect')

const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>HomePage</h1>')
})

const start = async ()=>{
  try {
    await connectDB(process.env.DB_URL);
    app.listen(3000,()=>{
        console.log("Server Listening at Port 3000...DB Connected...");
        
    })
  } catch (error) {
    console.log(error)
  }
}
start();