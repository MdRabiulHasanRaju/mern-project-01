const { Schema, model } = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken')

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  try {
    const saltRound = await bcryptjs.genSalt(10);
    const hash_password = await bcryptjs.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});

userSchema.methods.tokenGenerate = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error(error);
  }
};

userSchema.methods.passwordCheck = async function(password){
  try {
    const user = this
    const isPasswordValid = await bcryptjs.compare(password, user.password)
    if(!isPasswordValid){
      return res.status(401).json({
        msg: "Invalid Credentials"
      })
    }

    return true
  } catch (error) {
    console.log(error);
  }
}

const User = model("User", userSchema);
module.exports = User;
