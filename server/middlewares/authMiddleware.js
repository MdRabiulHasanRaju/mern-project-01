const jwt = require('jsonwebtoken')
const User = require('../models/user-model')

exports.authMiddleware = async (req, res, next) => {
    try {
        const token = req.header('Authorization')
        if(!token){
            res.status(401).json("Unauthorized HTTP, Token not provided")
        }

        const jwtToken = token.replace("Bearer", "").trim()


        isVerified = jwt.verify(jwtToken,process.env.JWT_SECRET)

        const userData = await User.findOne({email: isVerified.email}).select({password:0})

        req.user = userData
        req.token = token
        req.userID = userData._id

        // console.log(userData)

        next()
    } catch (error) {
        console.log(error)
    }
}