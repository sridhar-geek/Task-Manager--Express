const Task = require('../models/schema')    // importing schema from models folder

const getAllTasks = async (req,res) => {
    try {
        const tasks = await Task.find({})
        res.status(201).json( {tasks})
    } catch (error) {
         res.status(500).json({ msg: error})
    }
}

const createNewTask = async (req,res) => {
    try {
        const task = await Task.create(req.body);    // creating documents from req.body 
        res.status(201).json( { task } )
        
    } catch (error) {
       res.status(500).json({ msg: error})
    }
}


const getSingleTask = async (req,res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOne( {_id:taskID});
        if(!task){
            return res.status(404).json( {msg: `No task is present with the id ${taskID}`})
        }
        res.status(200).json({ task })
    } catch (err) {
     res.status(500).json({ msg: err })   
    }
}
 

const updateTask = async (req,res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate( {_id:taskID},req.body,
            { new:true, 
              runValidators:true,
              } )
       if(!task){
            return res.status(404).json( {msg: `No task is present with the id ${taskID}`})
        }
        res.status(200).json({ task })
    } catch (err) {
     res.status(500).json({ msg: err })   
    }
}


const deleteTask = async (req,res) => {
     try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete( {_id:taskID});
        if(!task){
            return res.status(404).json( {msg: `No task is present with the id ${taskID}`})
        }
        // res.status(200).json({ task })
        res.status(200).send({ task: null, msg: success})  // this would be better to send instead of deleted task
    } catch (err) {
       res.status(500).json({ msg: err })   
    }
}


module.exports = {
    getAllTasks,
    createNewTask,
    getSingleTask,
    updateTask,
    deleteTask
}                   // exports logics as objects to routes folder