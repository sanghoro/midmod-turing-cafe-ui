import './App.css';
import React from 'react';
import Form from './Form'
import Reservations from './Reservations'

function App() {
  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form />
      </div>
      <div className='resy-container'>
        <Reservations />
      </div>
    </div>
  );
}

export default App; 