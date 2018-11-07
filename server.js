const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// var path = require('path');
// app.set('views', path.join(__dirname, './views'));
// app.set('views', __dirname+'./views');

// app.set('view engine', 'ejs');

app.use(bodyParser.json()); 
app.use(express.static( __dirname + '/public/dist/public' ));

require('./server/routes')(app);



// Setting our Server to Listen on Port: 8000
app.listen(8000, ()=> {
    console.log("listening on port 8000");
})