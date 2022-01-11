const express = require('express')
const router = express.Router()
const passport = require('passport')

const Blog = require('../../models/blog')

router.get('/', (req,res) => {
    Blog.find()
        .sort({date: -1})
        .then(blogs => res.json(blogs))
        .catch(error => console.log(error))
})
router.post('/',(req,res) => {
    const newBlog = new Blog({
        title: req.body.title,
        snippet: req.body.snippet,
        body: req.body.body,
        dateCreated: req.body.dateCreated,
        author: req.body.author
    }) 
    newBlog.save().then(blog => res.json(blog))
})
router.delete('/:id', (req,res) => {
    Blog.findById(req.params.id)
        .then(blog => blog.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404))
})
router.get('/:id', (req,res) => {
    Blog.findById(req.params.id)
        .then(blog => res.json(blog))
        .catch(() => res.status(404))
})

module.exports = router