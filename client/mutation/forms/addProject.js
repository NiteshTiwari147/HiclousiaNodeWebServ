import gql from 'graphql-tag';

export default gql`
mutation addProject($tittle: String,$problemStatement: String,$solution: String,$softSkills: [String],$coreSkills: [String],$duration: String) {
    addProject(title: $tittle,problemStatement: $problemStatement,solution: $solution, softSkills: $softSkills, coreSkills: $coreSkills, duration: $duration) {
      id
    email
    }
  }
`