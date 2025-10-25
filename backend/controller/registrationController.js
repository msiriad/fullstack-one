
const registrationController=(req,res)=>{
let{username,email,password}=req.body
   if(!username){
      res.send("please put your Username")
   }else if(!email){
    res.send("Please put your email")
   }else if(!password){
    res.send("Please put your password")
   }else{
    res.send("Account Created")
   }
}

module.exports=registrationController