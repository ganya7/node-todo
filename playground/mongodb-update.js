const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("unable to connect to server");
    }
    console.log('connected to server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('dsjl')
    }, {
        $set: {completed: true}
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
});