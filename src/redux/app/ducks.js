const UPDATE_STEPPER = 'UPDATE_STEPPER';
const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
const SUBMIT_CREATE_FORM = 'SUBMIT_CREATE_FORM';

export const DRAWER_WIDTH = 240;

const initialState = {
  stepper: 0,
  drawerOpen: false,
  form: {
    participants: [
      { name: 'Alex', mail: 'st@gj.com' },
      { name: 'Marine', mail: 'sdt@gj.pom' },
      { name: 'Alice', mail: 'dt@gj.mom' },
    ]
  },
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
