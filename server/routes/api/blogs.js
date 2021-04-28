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

// {
//     "data": {
//         "_id": "605a9bbfdc00926dac80e716",
//         "title": "title",
//         "snippet": "snippet",
//         "body": "yes",
//         "date": "2021-03-24T01:54:07.005Z",
//         "createdAt": "2021-03-24T01:54:07.015Z",
//         "updatedAt": "2021-03-24T01:54:07.015Z",
//         "__v": 0
//     },
//     "status": 200,
//     "statusText": "OK",
//     "headers": {
//         "content-length": "203",
//         "content-type": "application/json; charset=utf-8"
//     },
//     "config": {
//         "url": "http://localhost:8000/blogs/605a9bbfdc00926dac80e716",
//         "method": "get",
//         "headers": {
//             "Accept": "application/json, text/plain, */*"
//         },
//         "transformRequest": [
//             null
//         ],
//         "transformResponse": [
//             null
//         ],
//         "timeout": 0,
//         "xsrfCookieName": "XSRF-TOKEN",
//         "xsrfHeaderName": "X-XSRF-TOKEN",
//         "maxContentLength": -1,
//         "maxBodyLength": -1
//     },
//     "request": {}
// }