import mongoose from "mongoose"; 

const addressSchema = new mangoose.Schema({
    
},{
    timestamps:true
})

const addressModel = mangoose.model('address',addressSchema)

export default addressModel