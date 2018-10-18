import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppRouterTemplate } from './components/AppRouter/AppRouetrTemplate';
import { store } from './store';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppRouterTemplate />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
