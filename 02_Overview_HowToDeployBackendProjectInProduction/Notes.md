# Basic Overview - How to deploy Backend Code in Production ?

## Install Node.js
Since we're using JavaScript in this backend development series, we need a runtime environment to execute JavaScript on our local system. Node.js is the runtime environment that allows you to run JavaScript on the server side. So, the first step is to install Node.js.

**Verify Installation: Check 'node' and 'npm' version:**
```
node --version
or
node -v

npm --version
or 
npm -v
```

## What is Node.js ?
Node.js (Node JS) is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript code on the server. Being cross-platform, Node.js can run on various operating systems, including Windows, Linux, Unix, macOS, and more.

## What does it mean when we say Node.js runs JavaScript code on servers ?
Traditionally, JavaScript is executed in web browsers. Each browser has its own JavaScript engine responsible for executing the JavaScript code. Some example of JavaScript engines include, Chrome: Uses the V8 engine, Firefox: Uses the SpiderMonkey engine.

### Client-Side Scripting
When you want to visit a website like youtube.com, you open your web browser and type in "youtube.com". Your browser sends a request to your Internet Service Provider (ISP). The ISP uses DNS (which is like an Internet phone book) to find the IP address of the YouTube server.

***DNS maps domain names (like youtube.com) to their respective IP addresses (the server's unique identifier), making it possible for browsers to find and connect to websites on the internet.***

Once the ISP gets the IP address, it sends it back to your browser. Then, your browser directly asks the YouTube server for its content.

The YouTube server responds by sending HTML, CSS, JavaScript, and other resources to your browser. Your browser's job is to interpret these files: HTML creates the structure of the webpage, CSS makes it look nice, and JavaScript adds interactive features like videos and buttons.

Everything you see and interact with on the webpage — like buttons, images, videos, and menus — is managed by frontend or client-side development.

Everything from the images and text displayed to the UI of a web browser make up client-side. This is often referred to as the front-end of web development.

***In short — no browser, no client-side application.  In client-side or frontend development, everything relies on the browser to interpret and display web pages, handle user interactions, and run JavaScript code that makes websites interactive and dynamic. The browser is essential for rendering and executing frontend components of web applications.***


### Server-Side Scripting
Server-side scripting is crucial for creating dynamic web pages, managing user requests, and handling tasks that involve dynamic data, such as user logins, processing payments, fetching real-time updates, sending emails, and performing other complex operations.

An important detail is that server-side code runs on web servers, which are responsible for delivering client-side code to users' browsers. This setup ensures that websites can efficiently manage and process information securely behind the scenes.

## What we are going to do ?
Now, we have to create a server that servers content depending to the user's request. 

So, first we need to create a server and for this we are going to use **Express.js** - a JavaScript library or a Node.js framework. Express.js is used to create a server.

Now, before installing Express.js, you need to create an empty node.js project/application because we are using node packages like express.

See, you can create server using JavaScript, but in this series we are using Express that's why it is essential to setup an empty node project.

## How to setup empty Node.js project ?

1. Install Node.js:
    - Make sure Node.js is installed on your computer.

2. Create a New Directory for Your Project:
    - Navigate to the directory where you want to create your Node.js project. 

3. Initialize a New Node.js Project:
    - Once you're in the desired directory, initialize a new Node.js project using npm (Node Package Manager). This will create a `package.json` file that tracks your project's dependencies and configuration settings.
    - Run the following command:
        ```
        npm init -y
        ```

    - The `-y` flag auto-generates a package.json file with default settings. If you prefer to answer questions about your project, you can omit the flag and npm will prompt you to provide details like project name, version, description, etc.

4. Verify package.json:
    - After running npm init, you'll see a package.json file in your project directory. This file contains metadata about your project and lists any dependencies that you add later using npm.

5. Start Building Your Project:
    - With your empty Node.js project set up, you're ready to start building! You can now install any necessary dependencies (like Express.js) using npm and begin writing your server-side JavaScript code.

After answering the question, the package.json file will be created and Here’s a brief overview of what you'll find in a typical package.json file,
```json
{
  "name": "basicbackend",
  "version": "1.0.0",
  "description": "A simple backend application to deploy.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "keywords": [
    "node"
  ],
  "author": "Gaurav Singh",
  "license": "ISC"
}
```
The "main" field specifies index.js as the main entry point for your Node.js application. So, create a file named 'index.js'.

Now, you can execute index.js file using node.js like this `node index.js`. However, if you prefer to run index.js using a script defined in your package.json, you can add a custom script under the "scripts" field. When you use `npm run start` or `npm start` in your terminal, this command explicitly instructs npm to execute the script named "start" that you've defined in package.json file.

## Express.js Installation
`npm install express`

Now, in the 'index.js' file add the following code to create a simple server.
```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

**Explanation:**

This app starts a server and listens on port 3000 for connections. The app responds with “Hello World!” for requests to the root URL (/) or route. For every other path, it will respond with a 404 Not Found.

**Let's break down each line of the provided Express.js code snippet:**

`const express = require('express')`: importing the "express" package. 

Now, there are two different syntax for important packages in JavaScript:
1. CommonJS Syntax (Node.js):
    - Example: `const express = require('express');`
    - Here, require('express') loads the express package/module, and assigns it to the variable express.

2. ES Modules (ES6+ Syntax) or Module JS Syntax:
    - Example: `import express from "express";`
    - This statement imports the default export from the express module.


`const app = express()`: creating a new instance of express.

`const port = 4000`:  In networking, a port number is used to identify which process or service on a computer should handle incoming data.

`app.get('/', (req, res) => {...})` is an Express.js method used to define a route handler for HTTP GET requests to a specific route. In this case, '/' specifies the root route of your web application. When a client makes a GET request to the root URL (e.g., http://localhost:3000/), this handler function will be executed.

`app.listen(port, () => { ... })`: This line starts the Express server and makes it listen for incoming HTTP requests on the specified port (in this case, 3000).


***Everytime you make changes to the server-side code, you need to restart the server.***

### Important Points:
- Use Environment Variables for sensitive information (.env).