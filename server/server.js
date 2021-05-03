const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(bodyParser.json({ limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true}))
app.use(cors())

//cors        
app.use(cors())

//conncecting to mongoDB
const dbURI = process.env.ATLUS_URI
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(8000, console.log('running mongodb')))
    .catch (err => console.log(err))

//routes
const blogs = require('./routes/api/blogs')
app.use('/blogs', blogs)

//serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}