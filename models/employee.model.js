const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
    name: {type: String, required: true, max: 50},
    id: {type: Number, required: true},
});


// Export the model
module.exports = mongoose.model('Employee', EmployeeSchema);