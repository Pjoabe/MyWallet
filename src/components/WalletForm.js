import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI, saveCoins } from '../redux/actions';

class WalletForm extends Component {
  state = {
    coins: [],
  };

  componentDidMount() {
    this.treatsApiData();
  }

  treatsApiData = async () => {
    const apiResult = await fetchAPI();
    delete apiResult.USDT;
    const coinsArray = Object.keys(apiResult);
    this.setState({ coins: coinsArray });
    const { dispatch } = this.props;
    dispatch(saveCoins(coinsArray));
  };

  onInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { coins } = this.state;
    return (
      <section>
        <form>
          <label htmlFor="expense">
            <input
              data-testid="value-input"
              type="text"
              name="expense"
              id="expense"
              onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="description">
            <input
              data-testid="description-input"
              type="text"
              name="description"
              id="description"
              onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="coins">
            <select
              data-testid="currency-input"
              id="coins"
            >
              { coins.map((coin) => <option key={ coin }>{ coin }</option>) }
            </select>
          </label>
          <label htmlFor="method">
            <select
              data-testid="method-input"
              name="method"
              id="method"
              onChange={ this.onInputChange }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            <select
              data-testid="tag-input"
              name="tag"
              id="tag"
              onChange={ this.onInputChange }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </section>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(WalletForm);
