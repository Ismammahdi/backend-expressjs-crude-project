const express=require('express');
const router=require('./src/routes/api');
const bodyParser=require('body-parser')
const mongoose = require('mongoose');
var cors = require('cors')

const app=express()


app.use(bodyParser.json());
app.use(cors())
// database Connsction start....
const uri="mongodb+srv://ismammahdi:ismam@cluster0.uz0irys.mongodb.net/simpleCrud?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(uri)
.then(()=>{
    console.log("DB Connected");
})
.catch((error)=>{
    console.log("error");
})
// database Connsction start.....

 app.use('/api/v1',router);
 

app.use('*',(req,res)=>{
res.status(404).json({message:'Not Found'});
});
 

module.exports=app;
