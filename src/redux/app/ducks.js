const UPDATE_STEPPER = 'UPDATE_STEPPER';
const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
const SUBMIT_CREATE_FORM = 'SUBMIT_CREATE_FORM';
const SUBMIT_RESTRICTIONS_FORM = 'SUBMIT_RESTRICTIONS_FORM';

export const DRAWER_WIDTH = 240;

const initialState = {
  stepper: 2,
  drawerOpen: false,
  form: {
    participants: [
      { name: 'Alex', mail: 'st@gj.com' },
      { name: 'Marine', mail: 'sdt@gj.pom' },
      { name: 'Alice', mail: 'dt@gj.mom' },
    ]
  },
  restrictions: {
    restrictions: [
      { forbidden: ['Marine, Alice'] },
      { forbidden: ['Alice'] },
      { forbidden: ['Alex'] },
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

    case SUBMIT_RESTRICTIONS_FORM:
      return {
        ...state,
        restrictions: action.restrictions
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

export function submitRestrictionsForm(restrictions) {
  return { type: SUBMIT_RESTRICTIONS_FORM, restrictions };
}
