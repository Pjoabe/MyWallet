import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setEmail } from '../redux/actions';

class Login extends Component {
  state = {
    email: '',
    password: '',
    disableSubmitBtn: true,
  };

  onInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, this.validateInputs);
  };

  validateInputs = () => {
    const { email, password } = this.state;
    const magicNumber = 6;
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (regex.test(email) && password.length >= magicNumber) {
      this.setState({
        disableSubmitBtn: false,
      });
    } else {
      this.setState({
        disableSubmitBtn: true,
      });
    }
  };

  render() {
    const { email, password, disableSubmitBtn } = this.state;
    return (
      <section>
        <form>
          <label htmlFor="email">
            <input
              data-testid="email-input"
              type="email"
              name="email"
              placeholder="E-mail"
              id="email"
              value={ email }
              onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="password">
            <input
              data-testid="password-input"
              type="password"
              name="password"
              placeholder="password"
              id="password"
              value={ password }
              onChange={ this.onInputChange }
            />
          </label>
          <button
            type="button"
            disabled={ disableSubmitBtn }
            onClick={ () => {
              const { history, dispatch } = this.props;
              dispatch(setEmail(email));
              history.push('/carteira');
            } }
          >
            Entrar
          </button>
        </form>
      </section>
    );
  }
}
Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
