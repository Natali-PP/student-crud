const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

//conecting to MongoDB Atlas
//const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user:user@cluster0.l04y8.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
//const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
//client.connect(err => {
//  const collection = client.db("test").collection("devices");
//  // perform actions on the collection object
//  client.close();
//});

const studentAPI = require('../backend/routes/student.route.js');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
//API
app.use('/api', studentAPI);
//app.use(express.json()); // Make sure it comes back as json
//app.listen(3000, () => {console.log('Server is running!...')})
// Create port
const port = process.env.PORT || 4000;
const server = app.listen( port, () => {
  console.log('Server is running! At port ' + port)
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//error handler
app.use( function(err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode=500;
  res.status(err.statusCode).send(err.message);
});
