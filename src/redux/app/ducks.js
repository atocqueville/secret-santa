const UPDATE_STEPPER   = 'UPDATE_STEPPER';

const initialState = {
  stepper: 0
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_STEPPER:
      return {
        ...state,
        stepper: action.value
      };

    default:
      return state;
  }
}

export function updateStepper(value) {
  return { type: UPDATE_STEPPER, value };
}
