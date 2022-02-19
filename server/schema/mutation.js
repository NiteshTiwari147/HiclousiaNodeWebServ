const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;
const UserType = require('./types/user_type');
const AuthService = require('../services/auth');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
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
});

module.exports = mutation
