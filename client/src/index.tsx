import './app/layout/style.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store/configureStore';




export const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
   
    <Router history={history}>
    <Provider store={store}>
      <Provider store={store}>
      <App />
      </Provider>
       
      </Provider>
    
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
