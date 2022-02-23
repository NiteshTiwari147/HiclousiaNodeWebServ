import gql from 'graphql-tag';

export default gql`
mutation initCandidate($firstName: String, $lastName: String, $age: String){
    createCandidate(firstName:$firstName, lastName:$lastName, age: $age) {
      id
      lastName
      firstName
      age
    }
  }
`