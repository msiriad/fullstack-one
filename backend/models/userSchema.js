const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        ruquired:true
    },
    password:{
        type:String,
        ruquired:true
    }
});

module.exports=mongoose.model("userlist",userSchema)