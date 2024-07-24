## An Important point to remember
When working on a backend project, such as building an authentication system, it's a bad practice to start writing code immediately. Instead, a good practice is to first outline what type of data you need for the authentication system. You need to have a clear understanding of the data requirements, like for building an authentication system you might need a username, email, date of birth, etc of the user. Once you have this clarity, the next step is to choose and database in which we can store the data. This step is crucial because a single change in data can affect the entire authentication system.

## What is Data Modelling ?
In simple words, data modeling refers to the process of defining the structure of the data that will be stored in a database. It involves specifying how data is organized, including the relationships between different data elements. So, data modeling means defining the structure of the data.

## What is MongoDB ?
MongoDB is a NoSQL (Not Only SQL) database where data is stored in the form of key-value pairs (JSON-like format). It is a schema-less database, meaning each document in a collection can have a different structure. In MongoDB, data is organized into collections, which are equivalent to tables in relational databases. Each collection contains multiple documents, which are equivalent to records or rows of data in SQL.

**An example of MongoDB document:**
```json
{
  "_id": "12345",
  "name": "Alice",
  "age": 25,
  "email": "alice@example.com",
  "address": {
    "street": "123 Main St",
    "city": "Springfield",
    "state": "IL"
  }
}

```

## What is Mongoose ?
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. Mongoose is primarily used to define the structure (or schema) of the data that will be stored in a MongoDB database.

### Installation
```
npm install mongoose 

or

npm i mongoose 
```

`i` is short for install.


### Terminologies:
1. Collections:
    - A collection is a group of MongoDB documents. Collections are equivalent to tables in relational databases. They can hold multiple JSON documents.
    - In Mongoose, a collection is represented by a model.
    - Example: users, products, orders.

2. Documents:
    - A document is a single record in a MongoDB collection, similar to a row in a SQL table. It is a JSON-like object containing key-value pairs.

3. Fields:
    - Fields, also known as properties or attributes, are similar to columns in a SQL table. 

4. Schema:
    - A schema in Mongoose defines the structure of documents within a collection. It specifies the fields, their data types, and any validation rules or default values. While MongoDB itself is schema-less, using Mongoose allows you to enforce a schema at the application level.

5. Schema Types:
    - While Mongoose schemas define the overall structure or shape of a document, Schema types in Mongoose define the type of data that can be stored in each field of a document. Common schema types include String, Number, Date, Boolean, Array, ObjectId, etc.

6. Model:
    - Models in Mongoose are higher-order constructors that take a schema and create instances of documents. They function similarly to creating a new object/instance of a class in object-oriented programming.

**An example to understand above terminologies:**
```javascript
// importing "mongoose" library - using common js syntax.
const mongoose = require('mongoose');

// Define a schema
const userSchema = new mongoose.Schema({
    name: 
    { 
        type: String, 
        required: true 
    },

    age: 
    { 
        type: Number, 
        min: 0, 
        max: 120 
    },

    email: 
    { 
        type: String, 
        required: true, 
    }
});

// Create a model
const User = mongoose.model('User', userSchema);


// Create a new user document
const newUser = new User({
  name: 'Alice',
  age: 25,
  email: 'alice@example.com'
});
```