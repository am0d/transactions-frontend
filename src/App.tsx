import * as React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
export { Transaction } from './model/Transaction';
export { TransactionsProps } from './TransactionList';
import { default as TransactionList } from './TransactionList';

const logo = require('./logo.svg');

class CategoriesScreen extends React.Component {
  render() {
    return <h3>Categories</h3>;
  }
}

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
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
          <Link to="/">Transactions</Link>
          <Link to="/categories">Categories</Link>
          <Route exact={true} path="/" component={TransactionList} />
          <Route path="/categories" component={CategoriesScreen} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
