const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
    },
    imageUrl: {
        type: String
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
    },
    description: {
        type: String,
        required: [true, 'Product description is required']
    },
    rating:{
        type:Number,
        default:4.5
    }
}, { timestamps: true }); 
module.exports = mongoose.model('Product', productSchema);