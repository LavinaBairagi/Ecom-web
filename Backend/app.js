require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express ();

///my routes
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const categoryRoute = require('./routes/category')
const productRoute = require('./routes/product')

///DB connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    // useCreateIndex:true

})
. then(() => console.log('Connected')).
catch(err => console.log('Caught', err.stack));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/api",authRoute);
app.use("/api",userRoute);
app.use("/api",categoryRoute);
app.use("/api",productRoute);

const port = process.env.PORT||5000;
// const port = 3000 ;
app.listen(port,()=>{
    console.log(`app running at ${port}`);
});