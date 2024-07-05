## Basic Terminologies in Backend Development

## What is a Server ?
Most people think "servers" are big computers that store a lot of data inside them. But this is not exactly true. Instead, servers are computer programs or software that provide services to another computer program and its users, also known as clients.

The physical machine or hardware on which this software application (the "server") is installed is typically more powerful than regular computers to handle the increased load and provide reliable service.

## Two Major Components in Backend Development:
There are two major components in backend development:
1. **Programming Language:** Examples include Java, JavaScript, PHP, C++, etc.
2. **Database:** Examples include MongoDB, MySQL, PostgreSQL, SQLite, etc.

In this Backend Learning series, we have chosen **JavaScript** and **MongoDB**. In **JavaScript**, we learn Express.js and Mongoose. These are JavaScript libraries used for specific purposes: Express.js is used for creating servers and handling HTTP requests, and Mongoose is used for interacting with MongoDB databases.

In backend development, we mainly handle three things:

1. **Data:** This includes information like usernames, passwords, and any other data our application needs to store or process.

2. **Files:** These are things like image files, PDFs, videos, and other types of files that users might upload or download through our application.

3. **Third-Party APIs:** These are external services or interfaces that our application connects with, such as file upload services or authentication through Google.

## File Structure in Backend Development:
```
/src
├── /db           # Contains database connection and configuration.
├── /models       # Contains data schemas.
├── /controllers  # Contains functions/methods processing data.
├── /routes       # Contains route definitions.
├── /middlewares  
├── /utils        # Contains utility functions (e.g., sendMail.js)
├── /constants    # Contains constants.
│   └── constants.js
├── app.js        # Entry point of the application
└── index.js      # Main file to start the application
```
