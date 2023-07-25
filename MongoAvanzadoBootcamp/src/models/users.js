import mongoose from "mongoose";

const collection = "Users";

const schema = new mongoose.Schema({
    name: String,
    email:String,
    cart: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:'Carts'
    }
})

const usersModel = mongoose.model(collection, schema);

export default usersModel;