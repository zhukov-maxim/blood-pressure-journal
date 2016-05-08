import { LOAD_COMPLETED } from '../actions/actions';

const initialState = {
  isLoading: true
};

export default function loadingState(state = initialState, action) {
  switch (action.type) {
    case LOAD_COMPLETED:
      return { ... state, isLoading: false }

    default:
      return state;
  }
}
