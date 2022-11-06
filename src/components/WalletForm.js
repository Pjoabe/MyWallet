import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI, saveCoins, saveFormData } from '../redux/actions';

class WalletForm extends Component {
  state = {
    coins: [],
    exchangeRates: [],
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Money',
    tag: 'Food',
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
    this.setState({ exchangeRates: apiResult });
  };

  onInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  dispatchToSum = async () => {
    const { id, value, description, currency, method, tag, exchangeRates } = this.state;
    const { dispatch } = this.props;
    dispatch(saveFormData({
      id, value, description, currency, method, tag, exchangeRates }));
    this.setState({
      id: id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    });
    await fetchAPI();
  };

  render() {
    const { value, description, method, tag, coins, currency } = this.state;
    return (
      <section>
        <form>
          <label htmlFor="expense">
            <input
              data-testid="value-input"
              type="text"
              name="value"
              id="expense"
              onChange={ this.onInputChange }
              value={ value }
            />
          </label>
          <label htmlFor="description">
            <input
              data-testid="description-input"
              type="text"
              name="description"
              id="description"
              onChange={ this.onInputChange }
              value={ description }
            />
          </label>
          <label htmlFor="coins">
            <select
              data-testid="currency-input"
              id="coins"
              name="currency"
              value={ currency }
              onChange={ this.onInputChange }
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
              value={ method }
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
              value={ tag }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
        <button
          onClick={ this.dispatchToSum }
          type="button"
        >
          Adicionar despesa
        </button>
      </section>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(WalletForm);
