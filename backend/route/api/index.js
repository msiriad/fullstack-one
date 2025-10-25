const express=require('express')
const _=express.Router()
const registration=require('./authRoute/registration')
const login=require('./authRoute/login')

_.use('/authentication',registration)
_.use('/authentication',login)

module.exports=_