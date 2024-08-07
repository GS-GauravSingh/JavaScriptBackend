// File Name: It's a good practice to append "model" or "models" to the file name when creating a new model. Example: sub_todos.model.js. 

import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },

        complete: {
            type: Boolean,
            default: false
        },

        // The createdBy field in a Mongoose schema is a reference to another document, often used to establish a relationship between documents. In this case, createdBy is a reference to a document in the User collection. This kind of reference allows you to track which user created a particular document.
        createdBy: {
            type: mongoose.Schema.Types.ObjectId, // type: mongoose.Schema.Types.ObjectId: Specifies that this field will store an ObjectId, which is a unique identifier for MongoDB documents.
            ref: "User" // ref: "User": Indicates that this ObjectId references documents in the User collection. 
        },

    },

    {
        timestamps: true
    }
);

export const SubTodoModel = mongoose.model("SubTodo", subTodoSchema);