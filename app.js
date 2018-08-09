const express = require('express');
const bodyParser = require('body-parser');
const employee = require('./routes/employee.route');
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://muftisamiullah:letusc123@ds129811.mlab.com:29811/employee';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));




app.use('/employee', employee);
var port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});