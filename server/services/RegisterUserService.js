const User = require('../models/user')
const bcrypt = require('bcrypt')

const RegisterUserService = async (newUser) => {
    const hashedPassword = await bcrypt.hash(newUser.password, 10)
    const user = new User({
        email: newUser.email,
        username: newUser.username,
        password: hashedPassword
    })
    if (await User.exists({username: user.username})) {
        return {error: "Username already being used by other account"}
    }
    if (await User.exists({email: newUser.email})) {
        return {error: "Email already being used by other account"}
    }
    return await user.save()
}

module.exports = RegisterUserService