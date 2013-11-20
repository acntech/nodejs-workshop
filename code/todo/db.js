var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Todo = new Schema({
  description : String,
  tags        : Array,
  updated_at  : Date,
  completed   : { type: Boolean, default: false }
});

mongoose.model('Todo', Todo);

mongoose.connect('mongodb://localhost/express-todo');
