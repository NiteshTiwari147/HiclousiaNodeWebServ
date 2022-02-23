import gql from 'graphql-tag';

export default gql`
mutation addEducation($school: String, 
    $degree: String, 
    $field_of_study: String,
    $start_year: String,
    $end_year: String, 
    $grade: String){
    addEducation(school: $school, 
        degree: $degree,
        field_of_study: $field_of_study,
        start_year: $start_year,
        end_year: $end_year, 
        grade: $grade) {
      id
      lastName
      firstName
      age
    }
  }
`