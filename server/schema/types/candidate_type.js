const graphql = require('graphql');
const mongoose = require('mongoose');
const Candidate = mongoose.model('candidate');
const { GraphQLObjectType,GraphQLList, GraphQLString, GraphQLID, GraphQLInt } = graphql;
const EducationType  = require('./education_type');
const ExperienceType = require('./experience_type');
const ProjectType = require('./project_type');
const ScorecardType = require('./scoreCard_type');

const CandidateType = new GraphQLObjectType({
    name: 'CandidateType',
    fields: {
        id: { type: GraphQLID},
        firstName: { type: GraphQLString},
        lastName: { type: GraphQLString },
        email: { type: GraphQLString},
        username: { type: GraphQLString },
        age: { type: GraphQLInt},
        EducationList: {
            type: new GraphQLList(EducationType),
            resolve(parentValue) {
                const { email } = parentValue;
                return Candidate.findEducation(email);
            }
        },
        ExperienceList: {
            type: new GraphQLList(ExperienceType),
            resolve(parentValue) {
                const { email } = parentValue;
                return Candidate.findExperience(email);
            }
        },
        ProjectList: {
            type: new GraphQLList(ProjectType),
            resolve(parentValue) {
                const { email } = parentValue;
                return Candidate.findProject(email);
            }
        },
        Scorecard: {
            type: ScorecardType,
            resolve(parentValue) {
                const { email } = parentValue;
                return Candidate.findScorecard(email);
            }
        }
    }
});

module.exports = CandidateType;