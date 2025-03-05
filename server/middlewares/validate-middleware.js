exports.signupValidator = (schema) => async (req, res, next) =>{
    try {
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody
        next()
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: error.errors[0].message
        })
    }
}