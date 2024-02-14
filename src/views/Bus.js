import React, { Children } from 'react'
import EmptySeat from './EmptySeat'
import '../App.css';
import Deck from '../components/Deck';
import { useNavigate,Link } from "react-router-dom";

function Bus({deck,seats}) {
    const deckseats=seats/2;
   
        
   
  return (
    <React.Fragment>
        <div className="header-container navbar">
        <Link to="/dashboard" className='navbar'>Dashboard</Link>   
        </div>
     

    <div className='buses'>
       <Deck seats={deckseats} deck="Lower Deck"/>
     
       {/* <Deck seats={deckseats} deck="Upper Deck"/> */}
      
    </div>
    </React.Fragment>
   
  )
}

export default Bus