const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLList } = graphql;

const coordinatesType = new GraphQLObjectType({
    name: 'CoordinatesTYpe',
    fields: {
        x: { type: GraphQLFloat},
        y: { type: GraphQLFloat}
    }
})

const scoreGraphType = new GraphQLObjectType({
    name: 'ScoreGraphType',
    fields: {
        className: { type: GraphQLString},
        plotPoints: { type: new GraphQLList(coordinatesType)}
    }
})

const ScorecardType = new GraphQLObjectType({
    name: 'ScorecardType',
    fields: {
        email:  { type: GraphQLString},
        radius: { type: GraphQLFloat},
        score:  { type: GraphQLFloat},
        graph: {type: new GraphQLList(scoreGraphType)},
        rank:   { type: GraphQLString}
    }
});

module.exports = ScorecardType;