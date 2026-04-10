import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import userRoute from "./Routes/UserRoutes.js";
dotenv.config();

//var
var mongodb_uri = process.env.MONGODB_URI;

//cors
const app = express();
app.use(cors());

//mongoose
mongoose.connect(mongodb_uri as string).then(() => console
.log("Mongodb connected")).catch(err => console.log(err));


//routes
app.use('/fivem', userRoute);



app.listen(3000, function () {
    console.log('server up');
})