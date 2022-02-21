const graphql = require('graphql');
const UserType = require('./user_type');
const CandidateType = require('./candidate_type');
const { GraphQLString, GraphQLNonNull } = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;
const mongoose = require('mongoose');
const Candidate = mongoose.model('candidate');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      }
    },
    getCandidateBasicInfo: {
      type: CandidateType,
      resolve(parentValue, args , req) {
        const { email } = req.user;
        return Candidate.findOne({ email });
      }
    }
  }
});

module.exports = RootQueryType;
