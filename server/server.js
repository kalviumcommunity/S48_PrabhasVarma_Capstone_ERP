require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const port =  3000;

const {

  invoiceModel,
  joiInvoiceSchema

} = require("./schema/invoiceSchema")

const { 
  LoginModel,
  loginSchema,
  signupSchema

} = require("./schema/loginSchema")


const mongoDbUri = process.env.MONGODB_URL;

async function Connection() {
    await mongoose.connect(mongoDbUri);
    console.log("Connected to DB");
  }

app.get('/ping', (req,res)=> {
  res.json({message:"suiii"});
})

app.get("/invoices", async (req, res) => {  try {
    const invoices = await invoiceModel.find();
    res.json(invoices); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching invoices" });
  }
});


app.post("/api/signup", async (req, res) => {
  const { username, password, email } = req.body;

  // Validate the signup data
  const { error } = signupSchema.validate({ username, password, email });

  if (error) {
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }

  try {
    // Check if the user already exists
    const existingUser = await LoginModel.findOne({ username });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Username already exists. Please choose a different one.",
      });
    }

    // If the user doesn't exist, create a new user
    const newUser = new LoginModel({ username, password, emailAddress: email });
    await newUser.save();
    res.json({
      success: true,
      message: "Signup successful",
      username
      
    });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.post("/api/login", async (req, res) => {
  const { username, password, email } = req.body;

  const { error } = loginSchema.validate({ username, password, email });

  if (error) {
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }

  try {
    const user = await LoginModel.findOne({ username });

    await user.save();

    if (user) {
      res.json({
        success: true,
        message: "Login successful",
        username,
      });
    
    } else {
      res.status(200).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});


Connection().then(() => {
    app.listen(port, () => {
      console.log(`🚀 server running on PORT: ${port}`);
    });
  });

module.exports = app;
