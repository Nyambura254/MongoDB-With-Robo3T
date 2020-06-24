var mongoose = require('mongoose');
var validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {useUnifiedTopology: true, useCreateIndex: true});

/*

//create the user model structure
var User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
});
*/
/*var person = new User({
    name: 'Gabriel',
    age: 18
});*/

/*person.save((err, user) => {
    if (err) {
        console.log('Error!', err);
    } else {
        console,log(user);
    }
});
*/

//model for task
//description(type: string)
//completed(type: Boolean)
//create the task model structure
/*
var Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

var task = new Task({
    description: 'Basket ball',
    completed: false
});
task.save().then(() => {
    console.log(task);
}).catch((err) => {
    console.log('Error', err);
});
*/