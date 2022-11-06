import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  sumTotal = () => {
    const { Expenses } = this.props;
    const total = Expenses.reduce((acumulator, current) => {
      acumulator += current.value * current.exchangeRates[current.currency].ask;
      return acumulator;
    }, 0);
    return total.toFixed(2);
  };

  render() {
    const { Email } = this.props;
    return (
      <header>
        <span data-testid="email-field">{ Email }</span>
        <span data-testid="total-field">{ this.sumTotal()}</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  Email: PropTypes.string.isRequired,
  Expenses: PropTypes.arrayOf(String).isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  Email: user.email,
  Expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Header);
