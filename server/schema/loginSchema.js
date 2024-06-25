const mongoose = require("mongoose");
const Joi = require("joi");

const LoginSchema = new mongoose.Schema({
    username: String,
    password: String,
    emailAddress: String,
  });

const LoginModel = mongoose.model("login", LoginSchema);


const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().email().required(),
  });
  
  const signupSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().email().required(),
  });

  

module.exports = {
    LoginModel,
    loginSchema,
    signupSchema

}