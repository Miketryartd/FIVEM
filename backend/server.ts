import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
dotenv.config();


const app = express();
app.use(cors());



app.listen(3000, function () {
    console.log('server up');
})