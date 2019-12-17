const UPDATE_STEPPER = 'UPDATE_STEPPER';
const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
const SUBMIT_CREATE_FORM = 'SUBMIT_CREATE_FORM';
const SUBMIT_RESTRICTIONS_FORM = 'SUBMIT_RESTRICTIONS_FORM';
const UPDATE_LIST_KEY = 'UPDATE_LIST_KEY';
const UPDATE_LOADING = 'UPDATE_LOADING';

export const MERGE_FORMS = 'MERGE_FORMS';
export const DRAWER_WIDTH = 240;

// JMHIFD

const initialState = {
  stepper: 0,
  drawerOpen: false,
  firstForm: {
    listName: '',
    participants: [
      { name: '', mail: '' },
      { name: '', mail: '' },
      { name: '', mail: '' },
    ]
  },
  secondForm: null,
  listKey: null,
  loading: {
    on: false,
    text: ''
  }
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_STEPPER:
      return {
        ...state, stepper: action.value
      };

    case TOGGLE_DRAWER:
      return {
        ...state, drawerOpen: !state.drawerOpen
      };

    case SUBMIT_CREATE_FORM:
      const { firstForm } = action;
      firstForm.participants.forEach((item, index) => item['id'] = index)
      return {
        ...state,
        firstForm,
        secondForm: firstForm.participants.length === state.firstForm.participants.length ? state.secondForm : null
      };

    case SUBMIT_RESTRICTIONS_FORM:
      return {
        ...state, secondForm: action.restrictions
      };

    case MERGE_FORMS:
      return {
        ...state, stepper: 3
      };

    case UPDATE_LIST_KEY:
      return {
        ...state, listKey: action.key
      }

    case UPDATE_LOADING:
        return {
          ...state,
          loading: {
            ...state.loading,
            on: action.on,
            text: action.text
          }
        }

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

export function mergeForms() {
  return { type: MERGE_FORMS };
}

export function updateListKey(key) {
  return { type: UPDATE_LIST_KEY, key };
}

export function updateLoading(on, text) {
  return { type: UPDATE_LOADING, on, text };
}
