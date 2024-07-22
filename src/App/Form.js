import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='inputs'>
        <input 
            className='input'
            placeholder='Name'
            type='text'
        />
        <input 
            className='input'
            placeholder='Date(mm/dd)'
            type='date'
        />
        <input 
            className='input'
            placeholder='Time'
            type='time'
        />
        <input 
            className='input'
            placeholder='Number of Guests'
            type='number'
        />
        <button className="Reserve-button">Make Reservation</button>
    </div>
  )
}

export default Form