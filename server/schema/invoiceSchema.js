const mongoose = require("mongoose");
const Joi = require("joi");

const invoiceSchema = new  mongoose.Schema({
    id: String,
    name: String,
    date: String,
    amount: String,
    status: String,
    payemnt: String,
});

const joiInvoiceSchema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
    date: Joi.string().required(),
    amount: Joi.string().required(),
    status: Joi.string().required(), 
    payment: Joi.string().required(),
});

const invoiceModel = mongoose.model('invoices', invoiceSchema);

module.exports= {invoiceModel,joiInvoiceSchema}