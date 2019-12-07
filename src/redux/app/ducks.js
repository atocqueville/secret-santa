const UPDATE_STEPPER = 'UPDATE_STEPPER';
const TOGGLE_DRAWER = 'TOGGLE_DRAWER';

const initialState = {
  stepper: 0,
  drawerOpen: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_STEPPER:
      return {
        ...state,
        stepper: action.value
      };

    case TOGGLE_DRAWER:
        return {
          ...state,
          drawerOpen: !state.drawerOpen
        };

    default:
      return state;
  }
}

export function updateStepper(value) {
  return { type: UPDATE_STEPPER, value };
}

export function toggleDrawer() {
  return { type: TOGGLE_DRAWER };
}
