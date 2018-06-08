const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("unable to connect to server");
    }
    console.log('connected to server');

    //deleteMany
    db.collection('Todos').deleteMany({text: 'Walk the dog'}).then((result) => {
        console.log(result);
    });

    //deleteOne
    db.collection('Todos').deleteOne({text: 'Walk the dog'}).then((result) => {
        console.log(result);
    });

    //findOneandDelete
    db.collection('Todos').findOneAndDelete({_id: new ObjectID('slkjl543534jlf')}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

});