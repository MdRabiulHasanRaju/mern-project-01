const User = require('../models/user-model')


const bcryptjs = require('bcryptjs')

exports.home = async (req, res)=>{
    res.status(200).send("This is from auth router")
}

exports.register = async (req, res)=>{
    try{

        const {username, email, phone, password} = req.body;

        const userExist = await User.findOne({email})

        if(userExist){
            return res.status(400).json({msg:"email already exists!"})
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
    }
}