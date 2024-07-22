import React from 'react'
import { useState } from 'react'
import './Form.css'

const Form = ({addReserve}) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("")
    const [number, setNumbers] = useState("")

    const submitReserve = (event) => {
        event.preventDefault()
        const newReserve={
            id:Date.now(),
            name,
            date,
            time,
            number
        }
        addReserve(newReserve)
        clearInputs()
    }

    const clearInputs = () => {
        setName("")
        setDate("")
        setTime("")
        setNumbers("")
    }

  return (
    <div className='inputs'>
        <input 
            className='input'
            placeholder='Name'
            type='text'
            value={name}
            name='text'
            onChange={event => setName(event.target.value)}
        />
        <input 
            className='input'
            placeholder='Date(mm/dd)'
            type='date'
            value={date}
            name='date'
            onChange={event => setDate(event.target.value)}
        />
        <input 
            className='input'
            placeholder='Time'
            type='time'
            value={time}
            name='time'
            onChange={event => setTime(event.target.value)}

        />
        <input 
            className='input'
            placeholder='Number of Guests'
            type='text'
            value={number}
            name='number'
            onChange={event => setNumbers(event.target.value)}

        />
        <button className="Reserve-button" onClick={event =>submitReserve(event)}>Make Reservation</button>
    </div>
  )
}

export default Form