const emailRagex = require("../helpers/emailRagex")
const userlist = require("../models/userSchema")

const registrationController=(req,res)=>{
let{username,email,password}=req.body
   if(!username){
      res.send("please put your Username")
   }else if(!email){
    res.send("Please put your email")
   }else if(!password){
    res.send("Please put your password")
    
   }else if(!emailRagex(email)){
    res.send({error:"please put you valid email"})
   }
   else{
    let data= new userlist({
      name:username,
      email:email,
      password:password
    })
    data.save()
    res.send("Data Created")
   }
}

module.exports=registrationController


// fullstackone
// rIlq0jbe3OnFdVAz