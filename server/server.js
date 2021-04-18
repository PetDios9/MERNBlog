const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(bodyParser.json({ limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true}))
app.use(cors())

//cors        
app.use(cors())

//conncecting to mongoDB
const dbURI = 'mongodb+srv://test:test1234@cluster0.hrcrj.mongodb.net/react-express-blog'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(8000, console.log('running mongodb')))
    .catch (err => console.log(err))

//routes
const blogs = require('./routes/api/blogs')
app.use('/blogs', blogs)