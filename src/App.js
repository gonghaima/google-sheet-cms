import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabletop from 'tabletop';

function App() {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(0);
  useEffect(() => {
    // setFetching(true);
    if (fetching === 0) {
      setFetching(1);
      try {
        Tabletop.init({
          key: '1Bh5AV7LwiiWOlK6G-kVDX8YiWJNEyLrrYU6WEYnb_lg',
          callback: googleData => {
            // console.log('google sheet data --->', googleData);
            setData(googleData);
            setFetching(2);
          },
          simpleSheet: true
        })
      } catch (error) {
        console.log(`error in api: ${JSON.stringify(error)}`);
      }
    }
  }, [data, fetching]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">React + Google Sheets Demo</h1>
        {JSON.stringify(data)}
      </header>
    </div>
  );
}

export default App;
