const graphql = require('graphql');
const { GraphQLList, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } = graphql;
const mongoose = require('mongoose');
const Candidate = mongoose.model('candidate');
const UserType = require('./types/user_type');
const CandidateType = require('./types/candidate_type');
const AuthService = require('../services/auth');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createCandidate: {
            type: CandidateType,
            args: {
                firstName: { type: GraphQLString},
                lastName: { type: GraphQLString },
                age: { type: GraphQLString},
            },
            resolve(parentValue, { firstName, lastName, age}, req) {
               const { id, email, username } = req.user;
               return  (new Candidate({id ,firstName, lastName, age, email, username })).save()
            }
        },
        addEducation: {
            type: CandidateType,
            args: {
                school : { type: GraphQLString},
                degree :  { type: GraphQLString},
                field_of_study:  { type: GraphQLString},
                start_year:  { type: GraphQLString},
                end_year:  { type: GraphQLString},
                grade:  { type: GraphQLString},
            },
            resolve(parentValue, { school, degree, field_of_study, start_year, end_year, grade}, req) {
                const { email } = req.user;
                return Candidate.addEducation(school, degree, field_of_study, start_year, end_year, grade, email);
            }

        },
        addExperience: {
            type: CandidateType,
            args: {
                organisation: {type: GraphQLString},
                position: { type: GraphQLString},
                start_year:  { type: GraphQLString},
                end_year: { type: GraphQLString,},
                current: { type: GraphQLBoolean}
            },
            resolve(parentValue, {organisation, position, start_year, end_year, current}, req) {
                const { email } = req.user;
                return Candidate.addExperience(email, organisation, position, start_year, end_year, current);
            }
        },
        addProject: {
            type: CandidateType,
            args: {
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
            },
            resolve(parentValue, {title, problemStatement, solution, coreSkills, softSkills, duration}, req) {
                const { email } = req.user;
                Candidate.updateScore(email);
                Candidate.updateSkill(email, coreSkills,softSkills);
                return Candidate.addProject(email, title, problemStatement, solution, coreSkills, softSkills, duration);
            }

        },
        signup: {
            type: UserType,
            args: {
                email: { type: GraphQLString},
                username: { type: GraphQLString},
                password: { type: GraphQLString}
            },
            resolve(parentValue, { email, password, username}, req) {
                return AuthService.signup({email, password, username, req});
            }
        },
        logOut: {
            type: UserType,
            resolve(parentValue, args, req) {
                const { user } = req;
                req.logOut();
                return user;
            }
        },
        login: {
            type: UserType,
            args: {
                email: { type: GraphQLString},
                password: { type: GraphQLString}
            },
            resolve(parentValue, { email, password}, req) {
                return AuthService.login({email, password, req});
            }
        }    
    }
})

module.exports = mutation
