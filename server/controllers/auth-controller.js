const User = require('../models/user-model')


const bcryptjs = require('bcryptjs')

exports.home = async (req, res)=>{
    res.status(200).send("This is from auth router")
}

exports.register = async (req, res, next)=>{
    try{

        const {username, email, phone, password} = req.body;

        const userExist = await User.findOne({email})

        if(userExist){
            const err = {
                status: 400,
                message: "Duplicate Email!",
                errorDetails: "Email already exists!"
            }
            next(err)
            return;
            // return res.status(400).json({msg:"email already exists!"})
        }

        // let saltRound = await bcryptjs.genSalt(10)
        // let password_hash = await bcryptjs.hash(password,saltRound)

        let user = new User({
            username,
            email,
            phone,
            password
        })

        const userCreated = await user.save()

        console.log(userCreated);


        res.status(201).json({msg: "Registration Succesfully", token: await userCreated.tokenGenerate(),userId: userCreated._id.toString()})

    }catch(error){
        console.log(error);
        next()
        // res.status(500).json({msg:"internal server error"})
    }
}

exports.login = async (req, res, next)=>{
    try {
        const {email, password} = req.body;

        const userExist = await User.findOne({email})
        if(!userExist){
            const err = {
                status: 400,
                message: "Invalid Credentials!",
                errorDetails: "Email / Password is invalid"
            }
            next(err)
            return;
            // return res.status(400).json({msg:"Invalid Credentials!"})
        }

        const isPasswordValid = await userExist.passwordCheck(password)

        // const isPasswordValid = await bcryptjs.compare(password,userExist.password)
        if(isPasswordValid){
            res.status(200).json({
                msg: "Login Successfull",
                token: await userExist.tokenGenerate(),
                userId: userExist._id.toString()
            })
        }else{
            const err = {
                status: 401,
                message: "Invalid Credentials!",
                errorDetails: "Email / Password is invalid"
            }
            next(err)
            // res.status(401).json({
            //     msg: "Invalid Credentials!"
            // })
        }

    } catch (error) {
        console.log(error);
        next()
        // res.status(500).json({msg:"internal server error"})
    }
}

exports.user = async (req, res, next) => {
    try {
        const userData = req.user;
        // console.log(userData)
        res.status(200).json({userData})
        
    } catch (error) {
        console.log(error)
        next();
    }
}