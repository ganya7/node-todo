const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');
    /*

        db.collection('Todos').find({
            // _id: new ObjectID('525219128729ere')
        })./!*cursor*!/toArray().then((docs) => {
            console.log('Todos');
            console.log(JSON.stringify(docs, undefined, 2));

        }, (err) => {
            console.log('unable to fetch todo notes', err);
        });
    */

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);

    }, (err) => {
        console.log('unable to fetch todo notes', err);
    });

    db.close();
});