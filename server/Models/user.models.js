import mongoose from "mongoose";

const userSchema = new mongoose.SchemaType({
    name : {
        type : String,
        required :[true,"Provide name"]
    },
    email : {
        type : String,
        required :[ true,"Provide email"],
        unique : true
    },
    password : {
        type :String,
        required :[true,"Provide password"]
    }
})