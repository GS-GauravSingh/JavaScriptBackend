import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();


// `use()` method is used when we have to use any middleware into our express app.
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

/*
`app.use()` is used to configure middleware in an Express application. 

`express.json()` is a built-in middleware function that allows you to handle JSON data by parsing incoming JSON data and making them accessible via `req.body`. 

The `limit: '16kb'` option specifies the maximum size for the JSON data, if the data exceeds this limit, Express will throw an error. 

Previously, handling JSON data in Express required the `body-parser` middleware. However, with recent versions of Express, you can now use `express.json()` directly to achieve the same functionality.
*/
app.use(express.json({
    limit: "16kb"
}));

/*
The line `app.use(express.urlencoded({ extended: true, limit: "16kb" }))` configures Express middleware to handle URL-encoded data with specific options.
*/
app.use(express.urlencoded({
    extended: true,
    limit:"16kb"
}));

/*
The line `app.use(express.static("public"))` configures an Express application to serve static files from the specified directory ("public"). This middleware function allows Express to automatically serve files such as HTML, CSS, and JavaScript that are stored in the specified directory. When a user requests a file, Express looks in the public directory for that file and serves it if found, simplifying the process of handling static assets like website styles and scripts.
*/
app.use(express.static("public"));


/*
The `cookie-parser` middleware in an Express application is used to access and manage cookies from the client’s (user’s browser). It makes cookies accessible via the `req.cookies` object, allowing you to read existing cookies. To set or modify cookies, you use methods like `res.cookie()` and `res.clearCookie()`, which are part of the response object. This allows you to perform operations such as creating, updating, and deleting cookies on the client’s browser.
*/
app.use(cookieParser());


export { app };