require('dotenv').config()
require('express-async-errors')

const express  = require('express')
const connectDB = require('./db/connect')
const UserRoutes = require('./routes/auth')
const ProductRoutes = require('./routes/product')
const ProfileRoutes = require('./routes/profile')
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json())
app.use(cookieParser());
const cors = require('cors');

app.use(cors({
      origin: 'http://localhost:4200',
       credentials: true,

})); // Allow all origins (or configure it below)


app.get('/',(req,res)=>{
    res.send('<h1>HomePage</h1>')
})
app.use('/api/v1',UserRoutes);
app.use('/api/v1',ProductRoutes);
app.use('/api/v1',ProfileRoutes);

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