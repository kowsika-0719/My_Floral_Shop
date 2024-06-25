const mongoose= require("mongoose");
const express=require('express')
const bodyparser=require('body-parser');
const encoder=bodyparser.urlencoded();
const app=express();
app.use('/css',express.static('css'));
app.use('/images',express.static('images'));
app.use('/js',express.static('js'));
app.use('/view engine',express.static('ejs'));
app.use(bodyparser.urlencoded({extended:true}));
mongoose.connect('mongodb://127.0.0.1:27017/mydata',{useNewUrlParser:true})
    .then(()=>{
        console.log('Connected Successfully!');
    })
    .catch(()=> {
        console.log('Connection failed!');
    });

    //