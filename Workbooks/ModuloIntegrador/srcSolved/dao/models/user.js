import mongoose from "mongoose";

const collection = "Users";

const schema = new mongoose.Schema({
    name:String,
    email:String,
    role: String,
    password:String,
    tasks: [{type:mongoose.SchemaTypes.ObjectId, ref:'Tasks'}]
})

schema.pre(['find','findOne'],function(next){
    this.populate('tasks');
    next();
})

const userModel = mongoose.model(collection,schema);

export default userModel;