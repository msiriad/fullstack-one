const express=require('express')
const _=express.Router()


_.get('/login',(req,res)=>{
   res.send("this is from login")
})

module.exports=_