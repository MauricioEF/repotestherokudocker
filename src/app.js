import express from 'express';
import { __dirname } from './utils.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname+'/public'))

app.get('/info',(req,res)=>{
    res.send({PORT:PORT})
})

const server = app.listen(PORT,()=>console.log(`Listening on PORT ${PORT}`))