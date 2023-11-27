import { INCREMENT, DECREMENT, RESET, GET_POST, RECEIVE_POST } from './actionTypes';

const initialState = {
  count: 0,
  loading: false,
  post: {},
}

function reducer(state = initialState, { type, payload }) {
    switch (type) {
      case INCREMENT:
        return { ...state, count: state.count + 1 };
      case DECREMENT:
        return { ...state, count: state.count - 1 };
      case RESET:
        return { ...state, count: 0 };
      case GET_POST:
        return { ...state, loading: true };
      case RECEIVE_POST:
        return { ...state, loading: false, post: payload };
      default:
        return state;
    }
}

export default reducer;