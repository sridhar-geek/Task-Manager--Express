const  mongoose  = require('mongoose');

const taskSchema = new mongoose.Schema({
   name: {
        type: String,
        required: [true, 'must provided name'],
        trim: true,
        maxlength: [30,'name can not be more than 20 characters'],
        minlength: [4, 'name should not be less than 4 characters']
  },                        // these extra feilds are for validation purpose
   completed: {
            type: Boolean,
            default: false,
  },
})

module.exports = mongoose.model("Task", taskSchema)


/* 
    this is used to set schema for our database model 
    schema helps to maintain consistent in DB, 
    example: for names we can set only strings 
    otherthan (name & completed) anything we add to our database there are not updated in database

    whatever we setup in a schema is passed to database, and whatever comes extra will be ignored
*/
