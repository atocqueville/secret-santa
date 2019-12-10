const UPDATE_STEPPER = 'UPDATE_STEPPER';
const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
const SUBMIT_CREATE_FORM = 'SUBMIT_CREATE_FORM';
const SUBMIT_RESTRICTIONS_FORM = 'SUBMIT_RESTRICTIONS_FORM';

export const DRAWER_WIDTH = 240;

const initialState = {
  stepper: 2,
  drawerOpen: false,
  firstForm: {
    participants: [
      { name: 'Alex', mail: 'st@gj.com', id: 0 },
      { name: 'Marine', mail: 'sdt@gj.pom', id: 1 },
      { name: 'Alice', mail: 'dt@gj.mom', id: 2 },
      { name: 'Alexis', mail: 'dehi@j.jdo', id: 3 },
    ]
  },
  secondForm: {
    restrictions: [
      { forbidden: [1, 2] },
      { forbidden: [2] },
      { forbidden: [0] },
      { forbidden: [0, 1, 2] },
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
      const { firstForm } = action;
      firstForm.participants.forEach((item, index) => item['id'] = index)
      return {
        ...state,
        firstForm
      };

    case SUBMIT_RESTRICTIONS_FORM:
      return {
        ...state,
        secondForm: action.restrictions
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

export function submitCreateForm(firstForm) {
  return { type: SUBMIT_CREATE_FORM, firstForm };
}

export function submitRestrictionsForm(restrictions) {
  return { type: SUBMIT_RESTRICTIONS_FORM, restrictions };
}
