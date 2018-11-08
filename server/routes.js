const controller = require('./controllers')
module.exports = function(app){
	//GET: Retrieve all Tasks
    app.get('/tasks', controller.showall);
    //GET: Retrieve a Task by ID
    app.get('/tasks/:id', controller.show);
	//POST: Create a Task
    app.post('/tasks/new', controller.create);
    //PUT: Update a Task by ID
    app.put('/tasks/:id', controller.update);
    //DELETE: Delete a Task by ID
    app.delete('/tasks/:id', controller.delete);
}