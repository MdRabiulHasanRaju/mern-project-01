const { z } = require("zod");

exports.signupSchema = z.object({
  username: z
    .string({ required_error: "Username is required!" })
    .trim()
    .min(3, { message: "Username must be atleast of 3 character" })
    .max(255, { message: "Username cannot be more than 255 characters" }),
  email: z
    .string({ required_error: "email is required!" })
    .trim()
    .email({message: "Invalid email address"})
    .min(3, { message: "email must be atleast of 3 character" })
    .max(255, { message: "email cannot be more than 255 characters" }),
  phone: z
    .string({ required_error: "phone is required!" })
    .trim()
    .min(11, { message: "phone must be atleast of 11 numbers" })
    .max(11, { message: "phone cannot be more than 11 numbers" }),
  password: z
    .string({ required_error: "password is required!" })
    .trim()
    .min(6, { message: "password must be atleast of 6 character" })
    .max(255, { message: "password cannot be more than 255 characters" }),

});


