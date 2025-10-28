require('dotenv').config()
const express = require('express')
const route = require('./route')
const mongodbconfig = require('./dbConfig/mongodbconfig')
const app = express()
const port = 3000

mongodbconfig()
app.use(express.json())
app.use(route)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
