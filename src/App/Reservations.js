import React from 'react'
import Card from './Card'

const Reservations = ({reserve}) => {

    const allReserves = reserve.map(reserve => {
        return (
            <Card 
                id = {reserve.id}
                key= {reserve.id}
                name = {reserve.name}
                date = {reserve.date}
                time = {reserve.time}
                number = {reserve.number}
            />
        )
    })

  return (
    <div>
        {allReserves}
    </div>
  )
}

export default Reservations