import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

export class Transaction {
  public constructor(
    public Store: string,
    public Date: Date,
    public Category: string,
    public Amount: number, ) {

  }
}

export interface TransactionsProps {
  Transactions: Transaction[];
}

class App extends React.Component<TransactionsProps, {}> {
  render() {
    return (
      <div>
        <nav className="navbar navbar-fluid">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <img alt="Brand" src={logo} className="App-logo" />
              </a>
            </div>
          </div>
        </nav>
        <div className="container">
          <table className="table">
            <caption>Transactions</caption>
            <thead>
              <tr>
                <th>Store</th>
                <th>Date</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {this.props.Transactions.map(t =>
                <tr key={t.Store}>
                  <td>{t.Store}</td>
                  <td>{t.Date.toISOString()}</td>
                  <td>{t.Category}</td>
                  <td>${t.Amount}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div >
      </div>
    );
  }
}

export default App;
