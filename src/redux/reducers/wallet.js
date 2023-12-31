import { SAVED_COINS, SAVE_FORM, REMOVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVED_COINS:
    return {
      ...state,
      currencies: action.payload,
    };
  case SAVE_FORM:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case REMOVE_EXPENSE: {
    return {
      ...state,
      expenses: action.payload,
    };
  }
  default:
    return state;
  }
};
export default wallet;
