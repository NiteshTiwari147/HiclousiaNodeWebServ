const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } = graphql;

const ExperienceType = new GraphQLObjectType({
    name: 'ExperienceType',
    fields: {
        email: { type: GraphQLString},
        organisation: {type: GraphQLString},
        position: { type: GraphQLString},
        start_year:  { type: GraphQLInt},
        end_year: { type: GraphQLInt,},
        current: { type: GraphQLBoolean}
    }
});

module.exports = ExperienceType;
