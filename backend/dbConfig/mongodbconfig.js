const mongoose = require('mongoose');

let apiname=process.env.DATA_NAME
let apipass=process.env.DATA_PASS
let dataname=process.env.DATA_NAME

const mongodbconfig =()=>{
    mongoose.connect(`mongodb+srv://${apiname}:${apipass}@cluster0.lbdhvqj.mongodb.net/${dataname}?appName=Cluster0`)
  .then(() => console.log('Connected!'));
}
module.exports=mongodbconfig