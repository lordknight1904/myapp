import React from 'react';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';

import store, {history} from './store';
import App from './components/App';

import './index.css';

const target = document.getElementById('root');

render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <App/>
    </ConnectedRouter>
  </Provider>,
  target
);
registerServiceWorker();
