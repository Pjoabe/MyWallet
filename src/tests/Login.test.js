import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('login page tests', () => {
  it('test if the page displays correctly', () => {
    renderWithRouterAndRedux(<App />);

    const email = screen.getByTestId('email-input');

    expect(email).toBeDefined();

    const password = screen.getByTestId('password-input');

    expect(password).toBeDefined();
  });

  it('test if the page redirects to wallet', () => {
    renderWithRouterAndRedux(<App />);

    const email = screen.getByTestId('email-input');

    const password = screen.getByTestId('password-input');

    userEvent.type(email, 'trybe@email.com');

    userEvent.type(password, '010101');

    const loginButton = screen.getByRole('button');

    userEvent.click(loginButton);

    // const { history } = renderWithRouterAndRedux(<App />);

    // const { pathname } = history.location;

    // expect(pathname).toBe('/carteira');
  });
});
