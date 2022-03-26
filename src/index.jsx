import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from './Contexts/Authorization/Authrization';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Provider>
      <App/>
    </Provider>
  </BrowserRouter>
</React.StrictMode>, document.getElementById('root'));