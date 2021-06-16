const express = require('express')
const RegisterUserService = require('../../services/RegisterUserService')
const router = express.Router()
const passport = require('passport')

router.use((req, res, next) => {
    console.log('new request made to users:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    console.log('status: ', res.statusCode)
    next();
  })

  //for checking if user is logged in
  router.get('/', (req,res, next) => {
    if (req.isAuthenticated()) {
      res.send({authenticated: true})
      next()
    } else {
      res.send({authenticated: false})
    }
  })

  router.get('/authenticateduser', (req,res,next) => {
    if (req.isAuthenticated()) {
      res.send({
        user: {
          username: req.user.username,
        },
        isAuthenticated: true
      })
    } else [
      res.send({
        user: null,
        isAuthenticated: false
      })
    ]
  })

router.post('/register', (req, res) => {
    RegisterUserService(req.body)
        .then(result => res.send(result.username))
        .catch(err => res.send(err))
})

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.send({
    user: {
      username: req.user.username
    },
    isAuthenticated: true
  })
})

router.get('/logout', (req, res, next) => {
  console.log(req.session)
  req.logout()
  req.session.destroy((err) => {
    if (err){
      console.log(err)
    }
    res.clearCookie('connect.sid')
    res.send('logged out')
  });
  console.log(req.session)
})


module.exports = router