import mongoose from mongoose;
const subCategorySchema = new mongoose.Schema({
    name : {
        type: String,
        default: ""
    },
    Image: {
        type: String,
        default: ""
    },
    category:[
        {
            type: mongoose.Schema.ObjectId,
            ref: 'category'
        }
    ]
},{
    timestamps: true
})

const subCategoryModel = mongoose.model('subCategory',subCategorySchema)

export default subCategoryModel;
// This code defines a Mongoose schema and model for a "subCategory" in a MongoDB database.