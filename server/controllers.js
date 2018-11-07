var Task = require('./models.js');

module.exports ={
    showall: function(req, res){
      console.log('hitting controller');
        Task.find({}, function(err, data) {
          if(err) {
            console.log("Returned error", err);
            res.json({message: "Error", error: err});
          } else { 
            res.json({message: "Success", data: data});
          }
        })
    },
    show: function(req, res){
        const id = req.params.id;
        Task.findOne({ _id: id} , function(err, data) {
            if(err) {
              console.log("Returned error", err);
              res.json({message: "Error", error: err});
            } else { 
              res.json({message: "Success", data: data});
            }
        })
    },
    create: function(req, res) {
        const task = new Task({ title:req.body.title, 
                                description: req.body.description, 
                                completed: req.body.completed});
        task.save(function(err, data) {
          if(err) {
              console.log("Returned error", err);
              res.json({message: "Error", error: err});
          } else {
              res.json({message: "Success", data: data});
          }
        });
    },
    update: function(req, res){
        const id = req.params.id;
        Task.findOneAndUpdate({ _id: id }, req.body,
                              // {$set:{ title:req.body.title, 
                              //         description: req.body.description, 
                              //         completed: req.body.completed}},
                              function(err, data) {
                                if(err) {
                                  console.log("Returned error", err);
                                  res.json({message: "Error", error: err});
                                } else { 
                                  res.json({message: "Success", data: data});
                                }
                              })
    },
    delete: function(req, res) {
        const id = req.params.id;
        Task.remove({ _id: id }, function(err, data){
          console.log("RECORD DELETED");
          res.json({message: "Delete", data: data});
        })
    }
} //end of module.exports