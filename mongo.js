var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var objectID = mongodb.objectID
var connectionURL = 'mongodb://127.0.0.1:27017';
var databaseName = 'task-Manager';
MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.timeLog('unable to connect to database');
    }
    var db = client.db(databaseName);
    //inserting one file

    // db.collection('user').insertOne({
    //     name: 'bonnie',
    //     city: 'Nakuru'
    // });

    //inserting many




    // db.collection("users").insertMany([{
    //     name: "bonnie",
    //     age: 36

    // }, {
    //     name: "ann",
    //     age: 50
    // }], (error, result) => {
    //     if (error) {
    //         return console.log('unable to insert users');
    //     }
    //     console.log('updated');
    // })

    //creating task
    //     db.collection("task").insertMany([{
    //                 description: 'fullstack js',
    //                 completed: true

    //             },
    //             {
    //                 description: 'loop 4',
    //                 completed: true
    //             }, {
    //                 description: 'happy',
    //                 completed: false
    //             }
    //         ],
    //         (error, result) => {
    //             if (error) {
    //                 return console.log('unable to insert users');
    //             }
    //             console.log('updated');
    //         });



    // refering by id
    db.collection('task').findOne({ _id: new mongodb.ObjectID("5ef083490694c92ce44adac2") }, (error, task) => {
        console.log(task)
    });

    db.collection('users').findOne({ _id: new mongodb.ObjectID("5ef07fd49bfbaa2a34967e3d") }, (error, user) => {
        console.log(user);
    });
});