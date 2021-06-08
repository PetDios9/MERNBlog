const LocalStrategy = require('passport-local').Strategy
const passport = require('passport')
const User = require('../models/user')
const bcrypt = require('bcrypt')

const PassportConfig = () => {
    passport.use(new LocalStrategy(async (username, password, done) => {
        const user = await User.findOne({username: username})
        if (user == null) {
            return done(null, false, {message: 'Incorrect Username or Password'})
        }
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                return done(err)
            }
            if (isMatch) {
                return done(null, user)
            } else {
                return done(null, false, {message: 'Incorrect Username or Password'})
            }
        })
    }))
    passport.serializeUser((user, done) => {
        done(null, user.id)
    })
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user)
        })
    })
}

module.exports = PassportConfig