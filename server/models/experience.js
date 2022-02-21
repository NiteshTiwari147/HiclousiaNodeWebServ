const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
    email: { type: String},
    organisation: {type: String},
    position: { type: String},
    start_year:  { type: Number, default: 2012},
    end_year: { type: Number, default: 0},
    current: { type: Boolean}
});

mongoose.model('experience', ExperienceSchema);
  
module.exports = ExperienceSchema;