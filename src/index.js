import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App from './Components/App';
import { store, persistor } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import './fonts/Heritage-Display.otf';
import './fonts/PitoSlab-Regular.otf';
import './fonts/Petitemort-Regular.otf';


ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
