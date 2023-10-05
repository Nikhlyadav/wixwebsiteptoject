const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config():

const userRoute = require("./routes/userRoute");

app.use(expresss.json());

mongoose 
 .connect(process.json());
  .then((=>{
    console.log("connected successfuly");
    app.listen(process.log(err);
    console.log("running successfuly at",process.env.port);
    )};
    .catch((error)=>{
        console.log=>{
            console.log("error",error);
        }
    });
    app.use('/api/user",userRoute);
  }))

  // get single user
   
  router.get("/",async(req,res)=>{
    const {id}=req.params;
    try{
        const{
            const single = await
        }
    }
  })
