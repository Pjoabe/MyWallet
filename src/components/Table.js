import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpenses } from '../redux/actions';

class Table extends Component {
  render() {
    const { Expenses, dispatch } = this.props;
    return (
      <table>
        <th>Descrição</th>
        <th>Tag</th>
        <th>Método de pagamento</th>
        <th>Valor</th>
        <th>Moeda</th>
        <th>Câmbio utilizado</th>
        <th>Valor convertido</th>
        <th>Moeda de conversão</th>
        <th>Editar/Excluir</th>
        <tbody>
          {Expenses.map(({
            id, description, tag, method, value, exchangeRates, currency,
          }) => (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{Number(value).toFixed(2)}</td>
              <td>{exchangeRates[currency].name}</td>
              <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
              <td>
                {(Number(exchangeRates[currency]
                  .ask) * value).toFixed(2)}
              </td>
              <td>USD</td>
              <td>
                <button
                  data-testid="delete-btn"
                  type="button"
                  id={ id }
                  onClick={ () => {
                    const toMaintain = Expenses
                      .filter((exp) => Number(id) !== Number(exp.id));
                    dispatch(removeExpenses(toMaintain));
                  } }
                >
                  REMOVER DESPESA
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = ({ wallet: { expenses } }) => ({
  Expenses: expenses,
});

Table.propTypes = {
  Expenses: PropTypes.arrayOf(String).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Table);
