const mongoose = require ('mongoose');

const DatabaseConnection = async()=>{
 await mongoose.connect('mongodb://localhost:27017/MyBlog')
 .then (()=>console.log ('successfully connected to mongodb'))
 .catch(()=>console.log('cannot connect to database'))
}
module .exports = DatabaseConnection;