import { graphql } from 'babel-plugin-relay/macro';

export const createChristmasList = graphql`
  mutation relayCreateListMutation($data: ChristmasListInput!) {
    createChristmasList(data: $data) {
      participants {
        name
        secretSanta {
          name
        }
      }
    }
  }
`;