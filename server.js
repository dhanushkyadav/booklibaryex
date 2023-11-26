if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express=require('express')
const app=express()
const expresslayouts=require('express-ejs-layouts')

const routerindex=require('./routes/index')

const mongoose=require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{
 })
const db=mongoose.connection
db.on('error',error => console.error(error))
db.once('open',()=> console.log('connected to mongodb'))

app.set('view engine','ejs')
app.set('views',__dirname +'/views')
app.set('layout','layouts/layout')
app.use(expresslayouts)
app.use(express.static('public'))

app.use('/',routerindex)

app.listen(process.env.PORT || 3000)