import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import blogRoutes from './routes/blogRoutes.js';
import path from 'path';

dotenv.config();

const app = express()

app.use(bodyParser.json())
app.use(cors());

const __dirname = path.resolve();


mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err))

//Routes
app.use('/api/blogs',blogRoutes)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,"/frontend/dist")))
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))

