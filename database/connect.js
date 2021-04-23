const mongoose = require ('mongoose')


const connectDB = () => { 
    
    mongoose.connect("mongodb://127.0.0.1:27017/users" , { useNewUrlParser: true , useUnifiedTopology: true ,useCreateIndex:true, useFindAndModify:false })
    .then(() => console.log('connected to database successefully'))
    .catch((err) => console.log('connection to database failed' , err))


}


module.exports = connectDB