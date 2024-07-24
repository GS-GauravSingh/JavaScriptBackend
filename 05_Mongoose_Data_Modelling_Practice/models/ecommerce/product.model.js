import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    description: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    productImage: {
        type: String, // URL of Image.
    },

    price: {
        type: Number,
        default: 0
    },

    stock: {
        type: Number, 
        default: 0
    },

    // each product belongs to a particular Category.
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }


}, { timestamps: true });

export const Product = mongoose.model("Product", productSchema);