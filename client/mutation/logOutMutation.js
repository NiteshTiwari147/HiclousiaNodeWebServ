import gql from 'graphql-tag';

export default gql`
mutation {
    logOut{
      id
      email
    }
  }
`