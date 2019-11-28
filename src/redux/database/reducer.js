import { ADD } from './constants';

const initialState = {
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
      };

    default:
      return state;
  }
}