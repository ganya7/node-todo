var express = require('express');
var bodyParser = require('body-parser')


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {ObjectId} = require('mongodb');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});

//conventional url for when generating resources
app.post('/todos', (req, response) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        console.log('Todo : ', doc);
        response.send(doc);
    }, (err) => {
        console.log('unable to add todo', err);
        response.status(400).send(err);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    });
});


// GET /todos/1234321
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectId.isValid(id)) {
        return res.status(404).send({});
    }
    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(400).send();
        }
        res.send({todo});
    }).catch((e) => {
        console.log(e);
        res.status(400).send();
    });
});

module.exports = {app};

/*

var newTodo = new Todo({
    text: 'Cook dinner'
});

var otherTodo = new Todo({text: 'Something to do'});

otherTodo.save().then((doc) => {
    console.log('saved todo', doc);
}, (err) => {
    console.log('unable to save todo', err);
});

var newUser = new User({
    email: 'hello@welcome.com'
});

newUser.save().then((doc) => {
    console.log('user authenticated', doc);
}, (err) => {
    console.log('unable to add user', err);
});

*/
