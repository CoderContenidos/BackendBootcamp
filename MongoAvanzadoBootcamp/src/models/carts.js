import mongoose from "mongoose";

const collection = "Carts";

const schema = new mongoose.Schema({
    products:[]
})


const cartsModel = mongoose.model(collection,schema);

export default cartsModel;