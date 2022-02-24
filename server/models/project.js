const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    email: { type: String},
    title: { type: String},
    problemStatement: { type: String},
    solution: { type: String},
    coreSkills: [{
        type: String
    }],
    softSkills:  [{
        type: String
    }],
    duration: { type: String}
});

mongoose.model('project', ProjectSchema);
  
module.exports = ProjectSchema;