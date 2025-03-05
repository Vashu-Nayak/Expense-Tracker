const express=require("express");
const dotenv = require('dotenv');
const colors=require('colors');
const morgan = require('morgan');

dotenv.config({path:'./config/config.env'});

const transaction=require('./routes/transaction')

const app=express();
// app.use('/api/v1/transaction',transaction);


app.get('/', (req,res) => res.send('Hello'));


const PORT=process.env.PORT || 5000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));