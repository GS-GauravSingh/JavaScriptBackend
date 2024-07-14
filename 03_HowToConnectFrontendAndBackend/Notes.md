## Two ways of Importing Packages/Modules/Files in JavaScript
Now, there are two different syntax for important packages in JavaScript:
1. CommonJS Syntax (Node.js):
    - Example: `const express = require('express');`
    - Here, require('express') loads the express package/module, and assigns it to the variable express.
    - In CommonJS syntax, Modules are imported synchronously, which means the module code is loaded and executed before the script continues its execution.

2. ES Modules (ES6+ Syntax) or Module JS Syntax:
    - Example: `import express from "express";`
    - This statement imports the default export from the express module. 
    - In ModuleJS syntax, Modules are imported asynchronously, which means that these import statement does not block the execution of the main script. However, the actual usage of the imported module will only begin after the import is resolved or complete.
    - When you want to use ES Module (ESM) or ModuleJS syntax for importing packages in your JavaScript code, you need to indicate this 
    in your package.json file. This is done by adding the "type" property with the value "module". Here’s how you can do it:
        ```json
        {
        "name": "your-project-name",
        "version": "1.0.0",
        "description": "Your project description",
        "main": "index.js",
        "type": "module",
        "scripts": {
            "start": "node index.js"
        },
        "dependencies": {
            "express": "^4.17.1"
        }
        }
        ```
    - With the "type": "module" set in your package.json, you can use ES Module syntax in your JavaScript files.

## What is CORS ?
CORS, which stands for Cross-Origin Resource Sharing, it's a security mechanism implemented in web browser and it is used to restrict other websites (running on different domain or port number) from accessing resources from your website. This mechanism is implemented to ensure that the resources are shared with the verified or authorized domains.

### How CORS Works:
- **Same-Origin Policy**: 
    - By default, web browsers only allow web pages to request resources from the same origin (same domain, and port) to prevent security risks.
    - In simple words, you can only access resources from your own website.

-  **Cross-Origin Policy**: 
    -  If a website wants to request resources from another website having different origin (different origin means different domain or port number), it needs permission from the server hosting the resource. 
    - In simple words, if a website wants to access a resource form another website then it need permission from the server hosting that website.

### A simple real-life analogy to understand CORS:
In your home, you have several things like a TV, bike, and phones. Now, can anyone access these resources? No, right? Only those who live in the house can access these resources. If an outsider wants to access these resources, they need to ask for your permission. If you allow them, they can access the resources; otherwise, they cannot.

Similarly, if you want to access resources from your own website, you can do so without any restrictions. But if you want to access or request resources from another website, you need permission from that website’s server. If the server grants permission, you can access the resource; otherwise, you cannot.

### How to grant permission to different domains to access resources from your server
To grant permission to different domains to access resources from your server, you need to configure CORS settings on your server. You can use the `cors` package to handle CORS in Express.js. 

1. First, you need to install it: `npm install cors`
2. You can use the cors package to specify which domains are allowed to access resources from your server. For example, to allow only http://localhost:5173 to access your server's resources, you can configure the cors like this:
```javascript
// Allow specific domain to access resources
app.use(
    cors({
        origin: "http://localhost:5173"
    })
)
```
3. If you want to allow all domains to access resources from your server, you can use an asterisk ('*') in place of the URL "http://localhost:5173".
```javascript
// Allow all domains to access resources
app.use(
    cors({
        origin: '*'
    })
);
```

### Using AXIOS to request data from server
Axios is a popular JavaScript library used for making HTTP requests from a web browser or Node. js.

Install: `npm install axios`

Usage: Let's fetch data from our own backend using Axios.
```javascript
// Let's fetch data from our own backend using Axios.
useEffect(() => {
    axios.get("http://localhost:3000/api/jokes")
    .then((res) => setJokes(res.data))
}, [])
```
One important thing about Axios is that you don't need to parse the response into JSON; Axios does it for you. In contrast, with the fetch API, you need to manually parse the response into JSON format.

Now, this get request will also result in CORS error and the reason and solution for solving this is already discussed above. You can solve this cors error by configuring the cors settings on your server by installing cors package.

### One more way to solve this Cors error is by using the proxy:

See, first we need to modify oue URL a little bit,
```javascript
useEffect(() => {
    axios.get("/api/jokes") // Notice the URL starts with "/api"
    .then((res) => setJokes(res.data))
}, [])
```

Now, in the 'vite.config.js' file we need to setup a proxy:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {

    // Proxy Setup
    proxy: {
      '/api': 'http://localhost:3000'
    },
  },
  plugins: [react()],
})
```

Explanation: In the Vite configuration file (vite.config.js), we're setting up a proxy to handle requests that start with '/api'. So, whenever we make a request that starts with '/api', the proxy configuration setting in the 'vite.config.js' file will automatically add this URL "http://localhost:3000" before the URL you make a request to (in this case "/api/jokes). So, in the end, you are requesting data from this URL: "http://localhost:3000/api/jokes".

Now, the important thing is, that you will not get any Cors error here, because of the proxy, the server feels like the request to access data comes from the same origin i.e., on the domain where the server is running. 

