import mongoose from "mongoose";

const collection = 'Companies';

const schema = new mongoose.Schema({
    name: String,
    type: String,
    address: String,
    users:[{type:mongoose.SchemaTypes.ObjectId, ref: 'Users'}],
})

const companyModel = mongoose.model(collection,schema);

export default companyModel;