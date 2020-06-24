const mongoose = require('mongoose');

var Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = Task;

/*
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