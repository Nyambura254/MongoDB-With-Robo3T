var express = require('express');
require('./db/mongoose');
var User = require("./models/user")
var Task = require('./models/task')

var app = express();
var port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
    var user = new User(req.body);

    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e)
    })
    //console.log(req.body);
    //res.send('Nodejs development');
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});