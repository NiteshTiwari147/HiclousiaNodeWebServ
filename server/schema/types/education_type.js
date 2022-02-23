const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

const EducationType = new GraphQLObjectType({
    name: 'EducationType',
    fields: {
        email: { type: GraphQLString},
        school : { type: GraphQLString},
        degree :  { type: GraphQLString},
        field_of_study:  { type: GraphQLString},
        start_year:  { type: GraphQLString},
        end_year:  { type: GraphQLString},
        grade:  { type: GraphQLString},
    }
});

module.exports = EducationType;