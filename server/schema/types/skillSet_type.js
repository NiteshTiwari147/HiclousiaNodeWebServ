const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLList } = graphql;

const SkillType = new GraphQLObjectType({
    name: 'SkillType',
    fields: {
        skillName: {type: GraphQLString},
        skillPoint: {type: GraphQLFloat}
    }
});

const SkillSetType = new GraphQLObjectType({
    name: 'SkillSetType',
    fields: {
        email:  { type: GraphQLString},
        skillSet: { type: new GraphQLList(SkillType)}
    }
});

module.exports = SkillSetType;