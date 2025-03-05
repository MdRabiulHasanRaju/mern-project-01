exports.signupValidator = (schema) => async (req, res, next) =>{
    try {
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody
        next()
    } catch (error) {
        console.log(error);
        const status = 400
        const message = "Fill out form properly!"
        const errorDetails = error.errors[0].message

        const err = {status,message,errorDetails}
        next(err)
        // return res.status(400).json({
        //     msg: error.errors[0].message
        // })
    }
}