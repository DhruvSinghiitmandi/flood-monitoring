const mongoose = require('mongoose')

const Schema = mongoose.Schema;

mongoose.model('Data',
    new Schema({ IMG: String, TIME: String, VEL: Number }),
    'outputs');
// Create a model
var Data = mongoose.model('Data');



module.exports = Data;