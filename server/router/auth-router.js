const express = require('express')

const router = express.Router()

const {home, register, login} = require('../controllers/auth-controller')

const {signupSchema, loginSchema} = require('../validators/auth-validator')
const {authValidator} = require('../middlewares/validate-middleware')


router.route('/').get(home)

router.route('/register').post(authValidator(signupSchema),register)
router.route('/login').post(authValidator(loginSchema),login)

module.exports = router