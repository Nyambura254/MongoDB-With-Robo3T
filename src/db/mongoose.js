var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-2', { useUnifiedTopology: true, useCreateIndex: true });

/////////////////////////////////////////////////////////////////////////////////////////////////
//create the user model structure
///////////////////////////////////////////////////////////////////////////////////////////////////

var User = mongoose.model('user', {
    name: {
        type: String,
        //validator to prevent someone inputing invalid values
        required: true,
        trim: true,

    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowecase: true,
        validator(value) {
            if (!this.validator.isEmail(value)) {
                throw new Error("Email is invalid")
            }
        }
    },
    //validator
    age: {
        type: Number,
        dafault: 0,

    }

});
var person = new User({
    name: 'phena',
    age: 34
});



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//using a callback function
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// person.save((err, user) => {
//     if (err) {
//         console.log('Error', err);
//     } else {
//         console.log(user);

//     }
// });


////////////////////////////////////
//using promises


person.save().then(() => {
    console.log(person);
}).catch((err) => {
    console.log('Error', err)
});

////////////////////////////////creating another task model structure
//task model
var task = mongoose.model('task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }

});
var task = new task({
    description: 'coding at lakehub',
    completed: true
});
////////////////////////////////////
//using promises


task.save().then(() => {
    console.log(task);
}).catch((err) => {
    console.log('Error', err) //this where if you pass a string and you defined as boolean
});