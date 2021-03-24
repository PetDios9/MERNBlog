import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())

//cors        
app.use(cors())

//conncecting to mongoDB
import keys from './config/keys.js'
mongoose.connect(keys.dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(5000))
    .catch (err => console.log(err))

//routes
import router from './routes/routes.js'
app.use('/', router)