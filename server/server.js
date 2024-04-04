require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const app = express();
const port =  3000;
const {invoiceModel,joiInvoiceSchema}=require("./schema/invoiceSchema")


const mongoDbUri = process.env.MONGODB_URL;

async function Connection() {
    await mongoose.connect(mongoDbUri);
    console.log("Connected to DB");
  }

app.get('/ping', (req,res)=> {
  res.json({message:"suiii"});
})

Connection().then(() => {
    app.listen(port, () => {
      console.log(`🚀 server running on PORT: ${port}`);
    });
  });

module.exports = app;
