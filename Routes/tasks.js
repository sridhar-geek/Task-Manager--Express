const express = require('express');
const router =express.Router();    // intilaize route

const { getAllTasks, 
        createNewTask, 
        getSingleTask,
        updateTask, 
        deleteTask    } = require("../Controllers/tasks")    // importing logic for specific route from controller


    // actual routes 
router.route("/").get(getAllTasks).post(createNewTask);
router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask);



module.exports = router;  // exporting routes to app.js file
