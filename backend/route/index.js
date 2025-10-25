const express=require('express')
const _=express.Router()
const auth=require('./api')

_.use('/api/v1',auth)

module.exports=_