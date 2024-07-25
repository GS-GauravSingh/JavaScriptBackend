## Let's learn How to connect Database:
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