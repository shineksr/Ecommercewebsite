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
        default :0
    },
    price:{
        type : Number,
        default : 0
    },
    discount: {
        type :Number,
        default : null
    },
    description:{
        type :String,
        default : ""
    },
    moreDetails:{
        type:Object,
        default:{}
    },
    publish:{
        type: Boolean,
        default:true
    },
    createdAt:{
        type :Date,
        default:''

    },
    updatedAt:{
        type : Date,
        type : ""
    }

},{
    timestamps:true
})

const productModel =mongoose.model('product',productSchema)

export default productModel;
// This code defines a Mongoose schema for a product model in a MongoDB database.