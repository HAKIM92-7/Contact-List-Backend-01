const express = require ('express') 

const app = express()

const connectDB = require('./database/connect')

const contactRouter = require ('./routes/contact')


app.use(express.json())

connectDB()


app.use('/contact' , contactRouter)




app.listen(5000 , err => {

err ? console.log('server error') : 

console.log('server is running at port 5000.....');


})