const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLFloat } = graphql;

const ScorecardType = new GraphQLObjectType({
    name: 'ScorecardType',
    fields: {
        email:  { type: GraphQLString},
        radius: { type: GraphQLFloat},
        score:  { type: GraphQLFloat},
        rank:   { type: GraphQLString}
    }
});

module.exports = ScorecardType;