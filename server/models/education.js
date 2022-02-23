const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EducationSchema = new Schema({
    email: { type: String},
    school : { type: String},
    degree :  { type: String},
    field_of_study:  { type: String},
    start_year:  { type: String},
    end_year:  { type: String},
    grade:  { type: String},
});

mongoose.model('education', EducationSchema);
  
module.exports = EducationSchema;