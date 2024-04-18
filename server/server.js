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

app.get("/invoices", async (req, res) => {  try {
    const invoices = await invoiceModel.find();
    res.json(invoices); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching invoices" });
  }
});


Connection().then(() => {
    app.listen(port, () => {
      console.log(`🚀 server running on PORT: ${port}`);
    });
  });

module.exports = app;
