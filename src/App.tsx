import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/App.css';
export { Transaction } from './model/Transaction';
export { TransactionsProps } from './TransactionList';
import { default as TransactionList } from './TransactionList';
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  NavLink,
  NavbarToggler,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const logo = require('./images/logo.png');

class CategoriesScreen extends React.Component {
  render() {
    return <h3>Categories</h3>;
  }
}

class AppState {
  public constructor(public isOpen: boolean = false) {}
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = new AppState();
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar color="light" light={true} expand="md">
            <NavbarBrand href="/">
              {' '}
              <img alt="Brand" src={logo} className="App-logo" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar={true}>
              <Nav className="ml-auto" navbar={true}>
                <NavItem>
                  <NavLink href="/">Transactions</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/categories">Categories</NavLink>
                </NavItem>
                <UncontrolledDropdown nav={true} inNavbar={true}>
                  <DropdownToggle nav={true} caret={true}>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right={true}>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider={true} />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
          <Route exact={true} path="/" component={TransactionList} />
          <Route path="/categories" component={CategoriesScreen} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
