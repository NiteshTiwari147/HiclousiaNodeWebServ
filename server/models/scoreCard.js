const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreGraphSchema = new Schema({
    className: { type: String},
    plotPoints: [
        {
            x: {type: Number, default: 50},
            y: {type: Number, default: 10}
        }
    ]
});

const ScorecardSchema = new Schema({
    email:  { type: String},
    radius: { type: Number, default: 10 },
    score:  { type: Number, default: 0 },
    graph: [
        {
            type: scoreGraphSchema,
            ref: 'graph'
        }
    ],
    rank:   {type: String, default: 'U'}
});

const generateGraph = function() {
    const obj = [
        {
            className: 'A',
            plotPoints: null
        },
        {
            className: 'B',
            plotPoints: null
        },
        {
            className: 'C',
            plotPoints: null
        },
        {
            className: 'D',
            plotPoints: null
        },
    ]
    return obj;
}

const updateGraph = function(scoreCard) {
    const arrayLength = 10
    scoreCard.graph.map(o => {
        const coordinatesArray = []
        var basePoint = 0;
        if(o.className === 'A') {
            basePoint = 89;
        }
        if(o.className === 'B') {
            basePoint = 79;
        }
        if(o.className === 'C') {
            basePoint = 71;
        }
        if(o.className === 'D') {
            basePoint = 59;
        }
        for(let i = 0; i<arrayLength; i++) {
            var randomX = Math.floor(Math.random()*20) - 9;
            var randomY = Math.floor(Math.random()*20) - 9;
            const obj = {
                x: i*2,
                y: basePoint + randomY
            }
            coordinatesArray.push(obj);
        }
        o.plotPoints = coordinatesArray;
    })
    return scoreCard;   
}

ScorecardSchema.statics.triggerUpdateGraph = function(email) {
    return this.findOne({email})
        .then(scoreCard =>{
            if(scoreCard.graph.length < 1) {
                scoreCard.graph = generateGraph();
            }  
            scoreCard = updateGraph(scoreCard);
            return Promise.all[scoreCard.save()];
        })
}


ScorecardSchema.statics.updateScore = function(email) {
    //function to trigger calculate new score 
    return this.findOne({email})
        .then(scoreCard => {
            ++scoreCard.score;    
            // call a function to generate score card graph
            if(scoreCard.graph.length < 1) {
                scoreCard.graph = generateGraph();
            }             
            scoreCard = updateGraph(scoreCard);
            return Promise.all[scoreCard.save()];
        })
}

ScorecardSchema.statics.getScorecard = function(email) {
    return this.findOne({ email })
    .then(scorecard => scorecard);
}

mongoose.model('scorecard', ScorecardSchema);

module.exports = ScorecardSchema;

