import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type : String,
        default : "",
    },
    Image : {
        type : String,
        default :""
    }

},{
    timestamps:true
})

const categoryModel = mongoose.model('category',categorySchema)

export default categoryModel;
// This code defines a Mongoose schema and model for a "category" in a MongoDB database.