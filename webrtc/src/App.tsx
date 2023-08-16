import React from 'react';
import useDispatch from 'react-redux';
import { Route, Link, Routes } from 'react-router-dom';

import './App.css';

const App: React.FC = () => {
  const HomePage: React.FC = () => {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <h1>Hello World</h1>
          </header>
        </div>
      </>
    )
  }
  // const dispatch = () => useDispatch();
  return (
    <HomePage></HomePage>
  );
}

export default App;
