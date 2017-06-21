import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/containers/App'
import registerServiceWorker from './utility/registerServiceWorker';
import './styles/index.css';
const { Provider } = require('react-redux');
import store from './store/store.js';

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
         <App />
      </div>
    </BrowserRouter>
   </Provider>
), document.getElementById('root'))

registerServiceWorker();
