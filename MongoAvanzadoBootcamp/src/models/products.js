import mongoose from "mongoose";

const collection = "Products";

const schema = new mongoose.Schema({
    title:String,
    price:Number,
    code:String
})


const productsModel = mongoose.model(collection,schema);

export default productsModel;