// File Name: It's a good practice to append "model" or "models" to the file name when creating a new model. Example: user.model.js. 

// Importing "Mongoose" Library - using Module JS Syntax.
import mongoose, { Mongoose } from "mongoose"

// Schema - Schema is used to define the structure of the data that will be stored in the MongoDB database.
const userSchema = new mongoose.Schema(
    {
        // Fields, also known as properties or attributes, are similar to columns in a SQL table.

        // Schema Type: Defining the expected data type of individual fields.
        userName: String,
        email: String,
        password: String,

        // But, if you want to use the powers of Mongoose library, then you must define the above fields like this:
        userName: {
            type: String, // data type of userName.
            required: true, // marked as required and this field cannot be left empty.
            lowercase: true, // Converts userName to lowercase
            unique: true, // Ensures userName is unique across the collection (collection is a group of documents).
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },

        password: {
            type: String,
            required: [true, "password is required"], // this array syntax is used for to specify a custom error message if the field is left empty. Used for error-handling.
        },
    },

    {
        /*
        Setting "timestamps: true" in your Mongoose schema options is a convenient way to automatically track the creation and update times of your documents. When you enable timestamps, Mongoose adds two fields to your schema:

        1. createdAt: a date representing when this document was created

        2. updatedAt: a date representing when this document was last updated
        */
        timestamps: true
    }
);

// Creating a Model
// mongoose.model() -> takes 2 parameters, first is the name of the Model, and second is the schema which defines the structure of the document created using this model.
export const UserModel = mongoose.model("User", userSchema);

// Finally export this model so that it can be imported and used in other parts of your application.

/*
Important Point:
The name of the above model is "User". Now, the important thing is, when you connect mongoose with MongoDB database, the name of the model is automatically converted to plural and lowercase to determine the collection name in the database. 

For example: "User" is converted to "users".
For example: "Todo" is converted to "todos".
*/