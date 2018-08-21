import * as React from 'react';
import './App.css';
export { Transaction } from './TransactionRow';
export { TransactionsProps } from './TransactionList';
import {
  TransactionsProps,
  default as TransactionList
} from './TransactionList';

const logo = require('./logo.svg');

enum Screen {
  TransactionScreen,
  CategoriesScreen
}
class AppState {
  public CurrentScreen: Screen;

  constructor() {
    this.CurrentScreen = Screen.TransactionScreen;
  }
}

class CategoriesScreen extends React.Component<{}, {}> {
  render() {
    return <h3>Categories</h3>;
  }
}

class App extends React.Component<TransactionsProps, AppState> {
  constructor(props: TransactionsProps) {
    super(props);
    this.state = new AppState();
  }

  setCurrentScreen(newScreen: Screen) {
    this.setState(previousState => ({
      CurrentScreen: newScreen
    }));
  }

  renderCurrentScreen() {
    switch (this.state.CurrentScreen) {
      case Screen.TransactionScreen:
        return <TransactionList {...this.props} />;
      case Screen.CategoriesScreen:
        return <CategoriesScreen {...this.props} />;
      default:
        return '';
    }
  }
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
        <a
          href="#"
          onClick={() => this.setCurrentScreen(Screen.TransactionScreen)}
        >
          Transactions
        </a>
        <a
          href="#"
          onClick={() => this.setCurrentScreen(Screen.CategoriesScreen)}
        >
          Categories
        </a>
        <div className="container">{this.renderCurrentScreen()}</div>
      </div>
    );
  }
}

export default App;
