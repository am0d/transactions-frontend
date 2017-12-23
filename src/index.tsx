import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Transaction, TransactionsProps } from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const transactions: TransactionsProps = {
  Transactions: [
    new Transaction('Walmart', new Date(), 'Groceries', 137.32),
    new Transaction('Pioneer', new Date(), 'Gas', 41.11)
  ]
};

ReactDOM.render(
  <App {...transactions} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
