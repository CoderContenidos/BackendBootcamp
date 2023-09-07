import mongoose from "mongoose";

const collection = "Tasks";

const schema = new mongoose.Schema({
    title: String,
    description: String,
    priority: String
},{timestamps:true})

const taskModel = mongoose.model(collection,schema);

export default taskModel;