const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dashboard',{ useNewUrlParser: true });
mongoose.Promise = global.Promise;

var TaskSchema = new mongoose.Schema({
    title: {type: String, required:true, minlength: 3},
    description: {type: String, default: ''},
    completed: {type: Boolean, default: false},
  }, {timestamps: true});
  
module.exports = mongoose.model('Task', TaskSchema);
