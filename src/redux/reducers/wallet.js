import { SAVED_COINS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVED_COINS:
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};
export default wallet;
