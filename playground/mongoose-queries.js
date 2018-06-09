const {ObjectId} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

var id = '5b1bf5d8313ead1d78d888f9';

if (!ObjectId.isValid(id)) {
    console.log('id is invalid');
}

/*
Todo.find({
    //mongoose will automatically convert string id into ObjectID
    _id: id
}).then((todos) => {
    console.log('Todos: ', todos);
}, (err) => {
    console.log('unable to find any todos');
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo: ', todo);
}, (err) => {
    console.log('unable to find any todos');
});
*/


Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo by ID: ', todo);
}, (err) => {
    console.log('unable to find any todos');
}).catch((err) => {
    console.log(err);
});

User.findById('5b1a5ce58f85660d98e8ee31').then((user) => {
    if (!user) {
        return console.log('unable to find user');
    }
    console.log('user: ', JSON.stringify(user, undefined, 2));
}).catch((err) => {
    console.log(err);
});