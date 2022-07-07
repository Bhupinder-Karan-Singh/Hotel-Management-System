const express= require('express');
const bodyParser = require('body-parser');
//const Reservation = require("./Reservation");
const mongoose = require("mongoose");
const cors = require('cors');
const Reservation = require('./Reservation');

//create app variable
const app=express();
const port=3000;

//add middleware
app.use(express.json());

app.use(cors());
//connect MongoDB
const connectDB=async()=>{
  const response=await mongoose.connect("mongodb://localhost:27017/project");

  console.log(`MongoDB is connected ${response.connection.host}`);
}

connectDB();
//get request

app.get('/reservationlist',async(req,res)=>{
  const reservation=await Reservation.find();
  res.status(200).json({status:true,data:reservation});
})
  
//post request
app.post("/reservations",async(req,res)=>{
  const reservation=await Reservation.create(req.body);
  res.status(200).json({status:true,data:reservation});
// console.log(req.body);
})

//get request
app.get("/reservations/:id",async(req,res)=>{
  const reservation=await Reservation.findById(req.params.id);
  res.status(200).json({status:true,data:reservation})

})

//delete request
app.delete("/reservations/:id",async(req,res)=>{
  const reservation=await Reservation.findByIdAndRemove(req.params.id);
  res.status(200).json({status:true,data:{}});

})

//update request
app.put("/reservations/:id",async(req,res)=>{
  const reservation=await Reservation.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true})
  res.status(200).json({status:true,data:reservation});
})

  app.listen(port,()=>{
   
    console.log(`Example app listing on port ${port}`)});
