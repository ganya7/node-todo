// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //object destructuring

/*
var obj = new ObjectID();
console.log(obj);
*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');
    var user = {name: "arvind", location: "san andreas"};
    var {location} = user;
    console.log(location);


    /*  db.collection('Todos').insertOne({
          text: 'something to do',
          completed: false
      }, (err, result) => {
          if (err) {
              return console.log('unable to add todo', err)
          }
          console.log(JSON.stringify(result.ops, undefined/!*filter parameters*!/, 2/!*indentation size*!/));
      });

      db.collection('Users').insertOne({
          name: "Arvind",
          age: 25,
          location: "India"
      }, (err, result) => {
          if (err) {
              return console.log('Unable to connect to db', err);
          }
          console.log(JSON.stringify(result.ops, undefined, 2));
          console.log(result.ops[0]._id.getTimestamp());

      });*/
    db.close();
});