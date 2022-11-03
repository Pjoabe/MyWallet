const USER_EMAIL = 'USER_EMAIL';

const setEmail = (payload) => ({
  type: USER_EMAIL,
  payload,
});

export { setEmail, USER_EMAIL };
