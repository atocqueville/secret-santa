import { graphql } from 'babel-plugin-relay/macro';

export const createChristmasList = graphql`
  mutation relayCreateListMutation($data: ChristmasListInput!) {
    createChristmasList(data: $data) {
      _id
    }
  }
`;

export const createParticipant = graphql`
  mutation relayCreateParticipantMutation($data: ParticipantInput!) {
    createParticipant(data: $data) {
      _id
      name
    }
  }
`;
