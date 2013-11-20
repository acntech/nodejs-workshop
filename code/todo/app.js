
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

// mongoose setup
require('./db');

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// routes
var routes = require('./routes');

app.get('/', routes.index);
app.post('/tasks', routes.create);
app.get('/tasks/:id/complete', routes.complete);
app.get('/tasks/:id/destroy', routes.destroy);
app.get('/tags/:tag', routes.tags);

app.get('/api/todos', routes.api.index);
app.get('/api/todos/:id', routes.api.get);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
