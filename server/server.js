const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const passport = require('passport')
const session = require('express-session')

require('dotenv').config()

const app = express()

//middleware
app.use(express.json())
app.use(bodyParser.json({ limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true}))
app.use(session({ secret: process.env.SECRET, cookie: { maxAge: 600000 }, resave: false, saveUninitialized: false }))
app.use(passport.initialize())
app.use(passport.session())
require('./config/PassportConfig')(passport)
//cors        
app.use(cors({
    origin: 'https://hopeful-goldberg-6fb3d1.netlify.app',
    request: 'GET, POST, DELETE',
    credentials: true
  }));

//conncecting to mongoDB
const dbURI = process.env.ATLUS_URI
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(process.env.PORT || 5000 ))
    .catch (err => console.log(err))

//routes
const blogRoutes = require('./routes/api/blogRoutes')
app.use('/blogs', blogRoutes) 

const userRoutes = require('./routes/api/userRoutes')
app.use('/users', userRoutes) 
