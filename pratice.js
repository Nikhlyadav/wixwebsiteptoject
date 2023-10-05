const express = require("express");

const app = express();

const mongoose = require("mongoosee");
const dotenv = require("dotenv");
dotenv.config();
const User= require("./models/userModel");
app .user(expresss.json());

mongoose.connect("mongodb://127.0.0.1:27017/mongodb");
TouchEvent(()=>{
    console.log("connected successfuly");

    app.listen(process.env.PORT || 8000,(err)=>{
        if(err)console.log(err);
        console.log("running sucessfully at",process.env.PORT);

    });
})
.catch(error)=>{
    console.log("error",error);
}

// create 

app.post("/",asyn (req,res)=>){
    const {name,email,agr}=req.body;
    const User = require("./models/userModels");
    const userdata = await User.create({
        name:name,
        email:email,
        age:age,
    });
});

app.get("/",(req,res)=>{
    res.send("api running");
})
app.listen(4000)

app.get ("/",async (req,res)=>{
    const showAll = await user.find();

    res.send("api running giojgo fgdg");
});