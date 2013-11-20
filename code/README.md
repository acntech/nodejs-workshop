# Node.js workshop app
This is the apps for the [Node.js](http://nodejs.org/) workshop.

## Required software
You need to install node.js, mongodb (unzipping is enough) and some text editor / IDE.

## hello-node
This is a basic app to test the node installation.
To start the hello-node app run `node hello-node/hello_node.js`, then go to [http://localhost:1337/](http://localhost:1337/).

## todo app
Once you have verified that the hello-node app works you can go ahead to the todo app.
It is located in the `todo` directory. Prior to starting the app you need to fire up mongodb:
    <path-where-you-unzipped-mongo>\mongod --dbpath=<path-where-you-want-your-db-files>
For example:
    C:\Users\l.moilanen\Downloads\mongodb\mongod --dbpath=C:\tmp\db
Start the actual app by running `node todo/app.js`.
You will find the app running [http://localhost:3000/](http://localhost:3000/).

### Everything working?
If you got the app running here are some suggestions for improvements:

* Implement deleting tasks by filling out the implementation in routes/index.js
 ** You may want to look up [MongoDB](http://www.mongodb.org) and [Mongoose](http://mongoosejs.com/) if you are uncertain.
* Implement marking tasks as complete, perhaps by:
 ** Changing the database schema (`db.js`).
 ** Creating a handler for the new method (`routes/index.js`)
 ** Register the route, PUT or PATCH to `/tasks/id` (`app.js`)
 ** Create a form/Javascript which completes the task by submitting a request to the url/method you selected
* Implement searching by tags, clicking a tag should show all the todos with that tag, hints:
 ** Those of you unfamiliar with Mongo(ose) can work from this example:
    Todo.find({"tags": "javascript"}, function(err, todo) { console.log("todo with 'javascript' tag: " + todo.description)});
* Create a JSON REST API for tasks, an example usage would be:
    GET /api/tasks/1 =>
    {
      "description": "Complete the todo app",
      "updated_at":  "2013-03-06T22:35:17.000Z",
      "tags":        ["fun", "urgent"]
    }
 ** This would involve:
  *** Some routes (maybe put them in a new file, routes/api.js)
  *** Implementing said routes (you can test it with "REST Console" for Chrome)
      Pro tip: check out JSON.parse(str) `str -> obj` and JSON.stringify(obj) `obj -> str`
* Autocompleting tags in the create by finding all existing tags and applying some Javascript magic
 ** Tip:
    There are autocomplete plugins for jQuery and Twitter Bootstrap
    It might want to change from comma separated to putting tags in a list on selection
* Something else. Go crazy!
* Check out [a great Node.js/Express/Mongo/Mongoose tutorial](http://dreamerslab.com/blog/en/write-a-todo-list-with-express-and-mongodb/) (upon which this sample app is based).
