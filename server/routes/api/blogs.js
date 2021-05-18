const express = require('express')
const router = express.Router()

const Blog = require('../../models/Blog')

router.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    console.log('status: ', res.statusCode)
    next();
  })

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
        body: req.body.body,
        dateCreated: req.body.dateCreated
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
router.get('/login', (req,res) => {
    
})

module.exports = router