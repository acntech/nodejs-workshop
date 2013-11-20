var mongoose = require('mongoose');
var Todo     = mongoose.model('Todo');

/*
 * GET home page.
 */
exports.index = function(req, res) {
  Todo.find(function(err, todos, count) {
    console.log(todos);
  	res.render('index', {
  	  title: 'Express Todo Example',
  	  todos: todos
  	});
  });
};

/*
 * POST to create new task.
 */
exports.create = function(req, res) {
  var desc = req.body.todo.description,
      tags = req.body.todo.tags ? req.body.todo.tags.replace(" ", "").split(",") : null;

  new Todo({
    description: desc,
    tags:        tags,
  	updated_at:  Date.now()
  }).save(function(err, todo, count) {
    console.log("saved todo");
    console.log(todo);
  	res.redirect('/');
  });
};

/*
 * DELETE to remove a task.
 */
exports.destroy = function (req, res) {
  // Fill this in with a proper implementation
  var id = req.params.id;
  Todo.findById(id, function (err, todo, count) {
    todo.remove(function (err, todo, count) {
      res.redirect('/');
    });
  });
};

/*
 * GET to complete a task.
 */
exports.complete = function (req, res) {
  var id = req.params.id;
  Todo.findById(id, function (err, todo, count) {
    console.log("Completing todo: " + todo);
    todo.update({ "$set": { "completed": !todo.completed } }, function(err, todo, count) {
      res.redirect('/');
    });
  });
};

/*
 * GET tasks with 'tag'.
 */
exports.tags = function (req, res) {
  var tag = req.params.tag;
  Todo.find({ "tags": tag}, function (err, todos, count) {
    console.log(todos);
    res.render('tags', {
      title: 'Express Todo Example',
      tag: tag,
      todos: todos
    });
  });
};

exports.api = {};

exports.api.index = function (req, res) {
  Todo.find({}, function (err, todos, count) {
    res.send(JSON.stringify(todos));
  });
};
exports.api.get = function (req, res) {
  Todo.findById(req.params.id, function (err, todo, count) {
    res.send(JSON.stringify(todo));
  });
};
