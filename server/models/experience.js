const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
    email: { type: String},
    organisation: {type: String},
    position: { type: String},
    start_year:  { type: String},
    end_year: { type: String},
    current: { type: Boolean}
});

mongoose.model('experience', ExperienceSchema);
  
module.exports = ExperienceSchema;