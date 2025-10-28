const userSchema = require("../models/userSchema")

const loginController=async(req,res)=>{
  
   let user= await userSchema.find()
   console.log(user);
   

}
module.exports=loginController