const express=require('express')
const loginController = require('../../../controller/loginController')
const _=express.Router()


_.get('/login',loginController)

module.exports=_