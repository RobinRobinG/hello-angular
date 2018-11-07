const controller = require('./controllers')
module.exports = function(app){
	//GET: Retrieve all Tasks
    app.get('/tasks', controller.showall);
    //GET: Retrieve a Task by ID
    app.get('/:id', controller.show);
	//POST: Create a Task
    app.post('/new', controller.create);
    //PUT: Update a Task by ID
    app.put('/:id', controller.update);
    //DELETE: Delete a Task by ID
    app.delete('/:id', controller.delete);
}