import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Counter } from './Counter';
import './style.css';
import NavigationBar from '../Shared/Header';
import Layout  from '../Shared/Layout';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Layout />
    </div>
  );
}

export default App;
