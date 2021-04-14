const express = require('express')
const router = express.Router()

const Blog = require('../../models/Blog')

router.get('/', (req,res) => {
    Blog.find()
        .sort({date: -1})
        .then(blogs => res.json(blogs))
        .catch(error => console.log(error))
})
router.post('/', (req,res) => {
    const newBlog = new Blog({
        title: req.body.title,
        snippet: req.body.snippet,
        body: req.body.snippet,
        date: req.body.date
    }) 
    newBlog.save().then(blog => res.json(blog))
})
router.delete('/:id', (req,res) => {
    Blog.findById(req.params.id)
        .then(blog => blog.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404))
})

module.exports = router