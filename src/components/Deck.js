import React, { useState } from 'react'
import EmptySeat from '../views/EmptySeat'
import {busSeats} from '../bus-seat-data'

function Deck({seats,deck}) {
  const [selectedbusState,setselectedBusState] = useState('available')
  const [selectedBus,setSelectedBus] = useState(0)
  const rowseats = seats/4;

  const handleBusClick = (id) => {
    console.log("here",id)
    setselectedBusState('selected')
    setSelectedBus(id)
  }

  const busSeatsCompoent = (
    <div className='bus-container'>
     {busSeats.map((item) => (
      <EmptySeat key={item.id}  handleBusClick={handleBusClick.bind(item.id)}  selectedBus={selectedBus}/>
    ))}
  </div>
)



  return (
    <div className='deck-text'>
      <p>{deck}</p>
      <div className="deck">
        <div className="row">
        {busSeatsCompoent}
        {busSeatsCompoent}
        </div>
        <div className="middle-walk"></div>
        <div className="row">
        {busSeatsCompoent}
        {busSeatsCompoent}
        </div>
      
       
      </div>
   
  </div>
  )
}

export default Deck