const express = require('express')
const RegisterUserService = require('../../services/RegisterUserService')
const router = express.Router()

router.use((req, res, next) => {
    console.log('new request made to users:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    console.log('status: ', res.statusCode)
    next();
  })

router.post('/register', (req, res) => {
    RegisterUserService(req.body)
        .then(result => res.send(result))
        .catch(err => res.send(err))
})

module.exports = router