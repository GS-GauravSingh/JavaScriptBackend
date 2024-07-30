## Important Links
[Models Link](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

## Initialize an empty node project
Use command `npm init` or `npm init -y` to create a package.json file.

## Setup a Profession Backend Project:
1.  Create a `.gitignore` file:
    - `.gitignore` file is used to ignore specify the files you don't want git to keep tack of.

    - **Git tracks files, not folders:** For example, if you create an empty folder, Git won't track it. To make Git track this folder, you need to create a file inside it. If you don't want to create any specific file at the moment, you can create a `.gitkeep` file. This is an empty file, and it's standard practice to name it .gitkeep to ensure Git tracks the folder.

    - There are some .gitignore file generators that can generate a .gitignore file for you.

2.  Create a `.env` file:
    - Files containing environment variables.
    - This file is typically ignored by Git because it contains sensitive information such as API keys, database credentials, and other configuration details that should not be shared publicly.

3.  Create a  `.env.sample` file:
    -  Used to share a template of the required environment variables.

4.  Create a `src` folder:
    - Contains all the source code files related to the project. This is where you organize and store your project's main codebase.

    - Inside this 'src' folder, w e have to create some files and folder:

    - Files Include:
        - app.js
        - constants.js
        - index.js
    
    - Folders Include:
        - controllers
        - db or database
        - middlewares
        - models
        - routes
        - utils or utilities

5. To use ES Modules (ESM) syntax for importing files (e.g., import statements) in Node.js, modify the package.json file by adding "type": "module". If you are okay with using CommonJS syntax (e.g., require statements), you don't need to make any changes to the package.json file.

## Development Dependencies (Dev Dependencies):
Dev Dependencies are dependencies used only during development and are not included in the production code.

1. `Nodemon`:
    - While creating an express server, we see that if we make any changes to the server code, we have to restart the server so that changes will be reflected. So, to overcome this headache of restarting the server every time, we use Nodemon, which automatically restarts the server whenever code changes are detected.

    - Nodemon Automatically restarts the server when changes are made to the code. This helps avoid the need to manually restart the server each time you make changes.

    - `npm install -D nodemon`, The `-D` flag in `npm install -D nodemon` is shorthand for `--save-dev`, which specifies that the package should be installed as a development dependency.

    - After successfully installing nodemon as a development dependency, you'll typically need to update your package.json file to add a script that uses nodemon for running your server.

2. `Prettier`:
    - Prettier is used for code formatting.
    
    - Instead of just using the VS Code extension, it’s better to set up Prettier directly in your project. This ensures everyone on the team has the same code formatting.

    - Installation:
        - `npm install -D prettier`
        - Installing prettier as a dev dependency.

    - After installing Prettier, you'll need to set up a configuration file to define your formatting rules. This file tells Prettier how to format your code.

        - Create a file name  `.prettierrc` or `.prettierrc.json`
        - Place it in the root directory of your project.
        - In this file add configuration options.
        - Example:
            ```json
            {
            "tabWidth": 4,
            "useTabs": false,
            "semi": true,
            "singleQuote": false,
            "trailingComma": "es5",
            "bracketSpacing": true
            }
            ```
        
        - Create a file name `.prettierignore`. 
            - In this file, list the files you don’t want Prettier to format. Use the same pattern syntax as .gitignore. 
            - And Place it in the root directory of your project.



# Let's learn How to connect Database with our Backend:
First, go to Google and search for MongoDB Atlas. Atlas is a service provided by MongoDB that gives you an online (cloud-based) database, so you don't have to install MongoDB locally on your system.

**Steps:**
1. Go to MongoDB Atlas and sign up for a free account if you don't already have one.

2. After signing in, click on "Build a Cluster".
    - Building a cluster in MongoDB Atlas is like setting up a database on a server to manage your data.

3. Go to the "Database Access" tab.
    - Click "Add New Database User".
    - Set up a username and password for your database user.
    - Make sure to note down the password as you'll need it later.

4. Go to the "Network Access" tab.
    - Click "Add IP Address".
    - If you want anyone to access this database, you can add the IP address 0.0.0.0/0 (not recommended for production), or add your IP address to restrict access.

5. Go to the "Database" Tab:
    - Click on "Connect".
    - Choose your connection method and get the connection string to connect this database with your application.

## Create Environment Variables for Database Connections:
To securely manage your database connection string, it's a good practice to use environment variables. Here’s how you can set this up:
1. MONGODB_URL=<your_connection_string>

## How to connect database with our backend:
There are two ways to connect database with backend code:
1. See, 'index.js' file is the main entry point of our backend. So, if I write database connection logic inside 'index.js' file. So, when 'index.js' file execute our database connection will happen.

2. Create a separate folder named db or database. Inside this folder, create a file (e.g., db.js or database.js) that contains the database connection logic. Then, import this file into your index.js file. This approach helps in organizing your code better

## Points to remember while performing database connection: 
1. It may possible that when connecting to database, some error may occured so it is important to handle these unwanted errors. So, always wrap you database connection code into a try/catch block or used promise to handle errors if occured.

2. "Always remember database is in another continent", meaning it takes some time to make connection with database, so always use make database connection asynchronously (use async/await).

# Let's learn more about Express.js:
**Express.js** is a JavaScript library and a Node.js package/framework specifically designed for creating web servers and handling HTTP requests.

## How to Install Express:
You can install Express into any project with npm(node package manager).

If you're in an empty folder, first create a new Node.js project with this command: `npm init` or `npm init -y`.

Then run this: `npm install express`, to install Express into the project.

## Request and Response Object:
When we learn about Express, the two most important things we have to learn in Express is Request and Response Object.

### Request:
The Request object (`req`) in Express.js represents the HTTP request and provides all the information about the request.

The Request object (`req`) in Express.js has a lot of properties that allow you to access detailed information about the incoming HTTP request.

### Response:
The Response object (`res`) in Express.js represents the HTTP response that an Express application sends when it receives an HTTP request.

## Configuring Express:
Data can indeed come in different forms, like URL parameters or JSON. To handle these various types of data, you need to configure Express with the appropriate middleware. For example, `express.json()` is used for JSON data, and `express.urlencoded()` is used for URL-encoded data. This setup ensures that your Express application can properly process and handle the incoming data.

For Example: For a URL like `http://localhost:3000/Gaurav%20Singh,` the space in the name is encoded as `%20`. The `express.urlencoded()` middleware ensures that this encoded data is correctly decoded and accessible in the application.

### Middleware
Example: Suppose a client or user hits the /instagram URL. The server receives this request and sends back a response. It is possible that the server receives a lot of requests on this URL and needs to perform some processing to determine whether the user is capable of receiving the response or not. For instance, if the user is not signed in, the server sends one type of response; if the user is logged in, the server sends a different response. So, the processing that takes place before sending the final response is performed by middleware.

### What is Middleware ?
Middleware in Express are functions that come into play after the server receives the request and before the response is sent to the client. They are arranged in a chain and are called in sequence.

We can use middleware functions for different types of processing tasks required for fulfilling the request like database querying, making API calls, preparing the response, etc, and finally calling the next middleware function in the chain.

Middleware functions in Express.js typically take three arguments: the request object (`req`), the response object (`res`), and the `next` function. When handling errors, an additional argument, err, is included, making it an error-handling middleware.
1. Request Object (`req`): The Request object (`req`) in Express.js represents the HTTP request and provides all the information about the request.

2. Response Object (`res`): Represents the HTTP response that an Express app sends when it gets an HTTP request.

3. Next Function (`next`): A function that, when called, executes the next middleware function in the stack.

```javascript
const express = require('express');
const app = express();
function middlewareFunction(request, response, next){
  ...
  next(); // Passes control to the next middleware in the chain.
}

app.use(middlewareFunction)
```
We call `app.use()` to add a middleware function to our Express application.

Under the hood, when we call `app.use()`, the Express framework adds our middleware function to its internal middleware stack. Express executes middleware in the order they are added, so if we make the calls in this order:

```
app.use(function1)
app.use(function2)
```
Express will first execute `function1` and then `function2`.

## Creating Utility files for API Response and Error Handling:
Creating separate files for API response and error handling helps organize the code better, making it easier to manage and maintain. It also ensures consistency across the application, as all errors and responses are sent in the same format.

### Utility file for Error Handling:
We are writing a wrapper function, which is an asynchronous function itself, that accepts another asynchronous function as an argument. Inside this wrapper function, we execute the provided asynchronous function. If an error occurs during the execution, the wrapper function catches the error and handles it gracefully. This approach can be implemented using async/await for cleaner and more readable code, but it can also be done using promises.

```javascript
// File: utils/asyncHandler.js


// Using Promises
// const asyncHandler = (func) => {
//     return (req, res, next) => {
//         Promise.resolve(func(req, res, next))
//         .catch((error) => next(error))
//     };
// };


// Using Async/Await
const asyncHandler = (func) => async (req, res, next) => {
    try {
        await func(req, res, next);
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        });
    }
}

export { asyncHandler };
```

#### Explanation of above code:
1. `Higher-Order Function`
    - The provided code snippet defines a higher-order function named `asyncHandler`.

    - `asyncHandler` is a higher-order function because it takes a function `func` as an argument and returns a new function. ***Higher-order functions are functions that operate on other functions, either by taking them as arguments or by returning them***.

2. Parameter `func`:
    - The parameter `func` is expected to be an asynchronous function (an async function). This asynchronous function typically contain logic that might fail or throw an error, such as database connection logic.

3. Returned Function:
    - The function returned by asyncHandler is an asynchronous function itself, which takes the typical Express.js middleware arguments: `req` (the request object), `res` (the response object), and `next` (the next middleware function in the stack).

4. Try-Catch Block:
    - Inside the returned function, there is a try-catch block:
        - `Try Block`: The `await func(req, res, next)` line attempts to execute the provided asynchronous function `func` with the current `req`, `res`, and `next` arguments. Since `func` is expected to be an async function, it returns a promise, and await waits for that promise to resolve.

        - `Catch Block`: If an error occurs while executing `func`, it is caught in the catch block. The error object is available as error.

5. Error Handling:
    - `res.status(error.code || 500)`:
        - `res.status`: This method sets the HTTP status code of the response.

        - `error.code`: This is expected to be a custom status code that may be set on the error object (e.g., 404 for "Not Found" or 400 for "Bad Request").

        - `error.code || 500`: This is a fallback mechanism. If error.code is not defined or is falsy (like undefined), the status code defaults to 500. Status code 500 represents "Internal Server Error", indicating a general error on the server.
    
    - `.json({ success: false, message: error.message })`:
        - `.json`: This method sends a JSON response to the client.

        - `{ success: false, message: error.message }`: This is the JSON object sent in the response body.

        - `success: false`: This indicates that the operation was not successful. It is a custom field that helps clients understand the outcome of the request.

        - `message: error.message`: This provides a description of the error. `error.message` contains the error message associated with the thrown error, which gives more details about what went wrong.



## Standardizing the format of API Response and API Error:
Standardizing the format for sending API responses and errors is important because it ensures consistency and makes all responses follow a predictable format, making it easier for developers to understand and work with the API.

### API Error:
For standardizing the format for sending Error messages, In Node.js, you can use the built-in Error class and extend it to create custom error classes, allowing you to standardize the format for sending error messages. By leveraging Object-Oriented Programming (OOP) principles, you can override methods and add custom properties to create your own error class. 

```javascript
// File: utils/apiError.js

class ApiError extends Error{

    // Constructor
    constructor(statusCode, message = "Something went wrong", errors = [], errorStack = ""){

        // JavaScript Functionality: Calling the constructor of parent class.
        super();

        this.statusCode = statusCode;
        this.message = message;
        this.success = false;
        this.data = null;
        this.errors = errors;

        if(errorStack)
        {
            this.stack = errorStack;
        }
        else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
};

export { ApiError };
```

### API Response:
```javascript
class ApiResponse{

    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode;
    }
};

export { ApiResponse };
```

