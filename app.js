require("dotenv").config({path: './.env'})     //requiring env file, to use port.

const express = require('express');  //requiring express

const app = express();    //saving express in app.

//logger/morgan
const logger = require('morgan');   //requiring morgan
app.use(logger("tiny"));            //this will show on console that which route is hit.


//Routes
app.use("/", require('./routes/indexRoutes'));


//so, this is our server set-up.
app.listen(
    process.env.PORT, 
    console.log(`server running on port ${process.env.PORT}`)
    )
//bczz port is declared in the env file, so we are access it by : 
//process.env.port and 
//also requiring it at the top
//so, this is our server set-up.