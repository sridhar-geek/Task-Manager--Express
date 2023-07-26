const express = require('express');
const app=express();

const tasks = require( "./Routes/tasks" )   //importing routes section from routes folder
const notFound = require ("./Controllers/notFound")
const connectDB = require ("./db/connect")  //importing a function for connection 
require("dotenv").config()                   // importing connection string 

// middleware
app.use(express.static("./public"))
app.use(express.json())  // this is used to get the data in req.body in json format 

// routes 
app.use("/api/tasks", tasks);    // this is middleware which will route all the requests
app.use(notFound )       // to handle unNeccessary routes 

 /* either we can use this or use middleware to handle extra routes */
//  app.get("*" , ( req,res ) =>{
//     res.status(404).send("Not Found ")
//  })
 

const port = 3000;

const start = async ()=>{
    try {
        await connectDB (process.env.MONGO_URL)     //passing connection string to function 
        app.listen(port, ()=>
            console.log(`Our Server is running on port ${port}`)
        )
    } catch (error) {
        console.log(error);
    }
}

start(); 




// to get all task          -- /api/tasks
// to create a new task     --/api/tasks
// to get unique task       -- api/tasks/:id
// to update a unique task  --/api/tasks/:id
// to delete unique task    --/api/tasks/:id