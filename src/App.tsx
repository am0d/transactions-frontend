import * as React from 'react';
import './App.css';
export {Transaction} from './TransactionRow';
export {TransactionsProps} from './TransactionList';
import {TransactionsProps, default as TransactionList} from './TransactionList';

const logo = require('./logo.svg');

class App extends React.Component < TransactionsProps, {} > {
  render() {
    return (
      <div>
        <nav className="navbar navbar-fluid">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <img alt="Brand" src={logo} className="App-logo"/>
              </a>
            </div>
          </div>
        </nav>
        <div className="container">
          <TransactionList {...this.props} />
        </div >
      </div>
    );
  }
}

export default App;
