import React from 'react';
import Sidebar from './components/Sidebar/Sidebar'; 
import Main from './components/Main/main';
import './App.css';

const App = () => {
  return (
    <div className="app-container">  
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;