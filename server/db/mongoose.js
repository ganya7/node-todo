var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const uri = 'mongodb://power:girlspuff1@ds253960.mlab.com:53960/todos'
mongoose.connect(uri || 'mongodb://localhost:27017/TodoApp');
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
