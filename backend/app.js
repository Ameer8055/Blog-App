const express = require('express');
const morgan= require('morgan');
const cors=require('cors')
const app=new express;
const path = require('path');
app.use(cors());
app.use(morgan('dev'));


const blogRoutes=require('./routes/blogRoutes');
const userRoutes=require('./routes/userRoutes');


app.use('/blog',blogRoutes);
app.use('/user',userRoutes);
require('dotenv').config();
require('./db/connection');


// app.use(express.static(path.join(__dirname, 'public')));


app.listen(process.env.PORT,()=>{
    console.log(`server is running on PORT ${process.env.PORT}`);
})