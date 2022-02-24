import gql from 'graphql-tag';

export default gql`
mutation addExperience($organisation: String,$position: String,$start_year: String,$end_year: String,$current: Boolean){
    addExperience(organisation: $organisation,position:$position, start_year:$start_year, end_year:$end_year, current:$current) {
      email
      id
      firstName
    }
  }
`