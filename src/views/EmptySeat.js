import React from 'react'
import SeatSVGCom from '../components/SVGComponent'
import '../App.css'


const  EmptySeat = (props) => {
 
  return (
    <div className={`bus`} key={props.key} onClick={props.handleBusClick.bind(props.key)}>
       <SeatSVGCom  />
    </div>
    
  )
}

export default EmptySeat;