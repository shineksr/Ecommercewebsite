import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type : String,
    },
    image :{
        type : Array,
        default : []
    },
    category : [
        {
            type : mongoose.Schema.ObjectId,
            ref : 'category'
        }
    ],
    subCategory : [
        {
            type : mongoose.Schema.ObjectId,
            ref :'subCategory'
        }
    ],
    unit :{
        type : String,
        default : ''
    },
    stock:{
        type : Number,
        default : []
    },
    price:{
        type : Number,
        default : ""
    },
    discount: {
        type :Number,
        default : ""
    },
    description:{
        type :String,
        default : []
    },
    moreDetails:{
        type:Object,
        default:[]
    },
    publish:{
        type: Boolean,
        default:""
    },
    createdAt:{
        type :Date,
        default:''

    },
    updatedAt:{
        type : Date,
        type : ""
    }

})