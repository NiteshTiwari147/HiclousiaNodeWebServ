const graphql = require('graphql');
const { GraphQLList, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } = graphql;

const ProjectType = new GraphQLObjectType({
    name: 'ProjectType',
    fields: {
        email: { type: GraphQLString},
        title: { type: GraphQLString},
        problemStatement: { type: GraphQLString},
        solution: { type: GraphQLString},
        coreSkills: {
            type: new GraphQLList(GraphQLString)
        },
        softSkills: {
            type: new GraphQLList(GraphQLString)
        },
        duration: { type: GraphQLString}
    }
})

module.exports = ProjectType;