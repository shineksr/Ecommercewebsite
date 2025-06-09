import mongoose from "mongoose"; 

const addressSchema = new mongoose.Schema({
    
},{
    timestamps:true
})

const addressModel = mongoose.model('address',addressSchema)

export default addressModel;