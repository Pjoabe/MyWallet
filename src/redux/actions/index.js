const USER_EMAIL = 'USER_EMAIL';
const SAVED_COINS = 'SAVE_COINS';
const SAVE_FORM = 'SAVE_FORM';
const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

const setEmail = (payload) => ({
  type: USER_EMAIL,
  payload,
});
const saveCoins = (payload) => ({
  type: SAVED_COINS,
  payload,
});

const fetchAPI = () => fetch('https://economia.awesomeapi.com.br/json/all').then((response) => response.json());

const saveFormData = (payload) => ({
  type: SAVE_FORM,
  payload,
});

const removeExpenses = (payload) => ({
  type: REMOVE_EXPENSE,
  payload,
});

export { removeExpenses, saveFormData, fetchAPI,
  saveCoins, setEmail, USER_EMAIL, SAVED_COINS, SAVE_FORM, REMOVE_EXPENSE };
