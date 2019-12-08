const UPDATE_STEPPER = 'UPDATE_STEPPER';
const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
const SUBMIT_CREATE_FORM = 'SUBMIT_CREATE_FORM';
const ADD_PARTICIPANT = 'ADD_PARTICIPANT';
const REMOVE_PARTICIPANT = 'REMOVE_PARTICIPANT';

export const DRAWER_WIDTH = 240;

const initialState = {
  stepper: 0,
  drawerOpen: false,
  form: {},
  participants: 3
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

    case SUBMIT_CREATE_FORM:
      return {
        ...state,
        form: action.form
      };

    case ADD_PARTICIPANT:
      return {
        ...state,
        participants: state.participants += 1
      };

    case REMOVE_PARTICIPANT:
      return {
        ...state,
        participants: state.participants -= 1
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

export function submitCreateForm(form) {
  return { type: SUBMIT_CREATE_FORM, form };
}

export function addParticipant(form) {
  return { type: ADD_PARTICIPANT, form };
}

export function removeParticipant(form) {
  return { type: REMOVE_PARTICIPANT, form };
}