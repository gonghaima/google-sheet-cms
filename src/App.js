import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabletop from 'tabletop';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Tabletop.init({
      key: '1Bh5AV7LwiiWOlK6G-kVDX8YiWJNEyLrrYU6WEYnb_lg',
      callback: googleData => {
        console.log('google sheet data --->', googleData)
      },
      simpleSheet: true
    })
    return function cleanup() {
      Tabletop.cleanup();
    };
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">React + Google Sheets Demo</h1>
      </header>
    </div>
  );
}

export default App;
