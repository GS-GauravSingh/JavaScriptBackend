import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

// Sometimes file extensions are important in import statements.
import { DB_NAME } from "./constants.js"
import connectDB from "./db/db.js"

// Load environment variables from .env file
// Place this after the import statements: Because we want our environment variables to load as soon as 
dotenv.config();

const app = express();

/*
First Approach: Database Connection.

// ----------------------- Database Connection Code Starts Here -------------------------------

// Wrapping the async function inside an IIFE (Immediately Invoked Function Expression) ensures that the database connection function executes automatically without needing to call it separately. 
// Note: You might see some people use a semicolon (;) before writing an IIFE. This semicolon is used to prevent errors from automatic semicolon insertion (ASI) in JavaScript.
(
    async function(){
        try {
            await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
            app.on("error", (error)=>{
                console.log("Error: Express App not able to talk to database: Error MSG: ", error);
            });
        } catch (error) {
            console.log("An error occured: ", error);
        }
    }
)();
// ----------------------- Database Connection Code Ends Here ---------------------------------
*/

// Second Approach: Dtabase Connection.
connectDB();

// Root Route
app.get("/", (req, res) =>{
    res.send("Server is Running.")
})

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}.`);
})
