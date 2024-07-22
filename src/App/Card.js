import React from 'react'
import './Card.css'

const Card = ({name, date, time, number, id}) => {
  return (
    <div className="Guest-cards">
        <h3 key={id}>{name}</h3>
        <p>Date: {date}</p>
        <p>{time} PM</p>
        <p>Number of Guests: {number}</p>
    </div>
  )
}

export default Card