var express = require('express');

//create our app
var app = express(); // call express lib as a function passing nothing as argument

//app.use let us add functionality to our express application
//express.static is used to specify the folder name that we wanna expose to the web server
app.use(express.static('public'));
// app.listen(to start the server) takes 2 args, port and the function which will be called when the server is up.
app.listen(3000, function(){
  console.log('Express server is up on port 3000');
});
