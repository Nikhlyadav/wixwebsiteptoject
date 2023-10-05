const mongoose = require('mongoose');
// create a user schhema
const userModel = new mongoose.Schema({
    name :{
        type:String,
        required:true,
    },
    email:{
        type :string ,
        unique:true,
        required:true,

    },
    agr :{
        type:Number,

    },
});

// create model
const user = mongoose.model('User',userSchema)
