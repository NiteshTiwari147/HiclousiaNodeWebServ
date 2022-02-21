const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScorecardSchema = new Schema({
    email:  { type: String},
    radius: { type: Number, default: 10 },
    score:  { type: Number, default: 0 },
    rank:   {type: String, default: 'U'}
});

ScorecardSchema.statics.updateScore = function(email) {
    //function to trigger calculate new score 
    return this.findOne({email})
        .then(scoreCard => {
            ++scoreCard.score;
            return Promise.all[scoreCard.save()];
        })
}

ScorecardSchema.statics.getScorecard = function(email) {
    return this.findOne({ email })
    .then(scorecard => scorecard);
}

mongoose.model('scorecard', ScorecardSchema);

module.exports = ScorecardSchema;

