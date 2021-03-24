import express from 'express'
const router = express.Router()

//blog model

import Blog from '../models/blog.js'
//routes
router.get('/', (req,res)=> {
    Blog.find()
        .sort({date: -1})
        .then(blogs=> res.json(blogs))
})

export default router