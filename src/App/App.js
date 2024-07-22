import './App.css';
import React from 'react';
import Form from './Form'
import Reservations from './Reservations'
import {useState, useEffect} from 'react'

function App() {
  const [reserve, setReserve] = useState([])

  const getReservations = () => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => {
      console.log('fetched data here >>', data)
      setReserve([...reserve, ...data])
    })
    .catch(err => console.log(err))
  }

  useEffect(()=>{
    getReservations()
  },[])

  const addReserve = (newReserve) => {
    setReserve([...reserve, newReserve])
  }

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form addReserve={addReserve}/>
      </div>
      <div className='resy-container'>
        <Reservations reserve={reserve}/>
      </div>
    </div>
  );
}

export default App; 