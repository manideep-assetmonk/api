/**
 * express library for handling of server requests
 */
require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/users',{useNewUrlParser:true})
/**
 * instance of the express object
 */
const app=express()
const con=mongoose.connection
con.on('error',(error)=>console.error(error))
con.once('open',()=>console.log('connected to database'))
app.use(express.json())


const router=express.Router()
const usersRouter=require('./routes/users')
/**
 * intializing routes
 */
app.use('/users',usersRouter)





app.listen(9000,()=>{
    console.log("started")

     con.on('open',()=>{
        console.log("connected")

         
     })
})