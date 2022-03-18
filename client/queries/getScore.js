import gql from 'graphql-tag';

export default gql`
{
    getCandidateBasicInfo{
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