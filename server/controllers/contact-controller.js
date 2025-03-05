const Contact = require('../models/contact-model')
exports.contactController = async (req, res, next)=>{
    try {
        const {name,email,message} = req.body
        const contactData = new Contact({
            name,
            email,
            message
        })

        const savedContact = await contactData.save();
        
        if(savedContact){

        return res.status(200).json({msg: "Message sent Succesfully"})}
        else{
            const err = {
                status: 400,
                message: "Failed to sent Message",
                errorDetails: "Message is not stored in database"
            }
            next(err)
            return;
        }

    } catch (error) {
        console.log(error);
        next();
    }
}