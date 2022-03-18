import gql from 'graphql-tag';

export default gql`
query fetchCandidateDetails{
    getCandidateBasicInfo{
      id
      firstName
      lastName
        EducationList{
        grade
        degree
        school
        field_of_study
        start_year
        end_year
      }
      ProjectList {
        title
        problemStatement
        solution
        coreSkills
        softSkills
        duration
      }
      ExperienceList {
        organisation
        position
        start_year
        end_year
        current
      }
      SkillSet {
        email
        skillSet{
          skillName
          skillPoint
        }
      }
      Scorecard {
        graph{
          className
          plotPoints {
            x
            y
          }
        }
        score
      }
    }
  }`