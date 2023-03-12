import React from 'react'
import './Header.css'
function Header({Ft}) {
  return (
    <div className='header'>
    <h1>Our Menu</h1>
    <div className="pp">
    <p></p>
    </div>
    <div className="headers">
     <div>
     <button onClick={()=>Ft("all")} ><h2>All</h2></button>
    <button onClick={()=>Ft("breakfast")}><h2>Breakfast</h2></button>
    <button onClick={()=>Ft("dinner")}><h2>Dinner</h2></button>
    <button onClick={()=>Ft("shakes")}><h2>Shakes</h2></button>
     </div>
    </div>
    </div>
  )
}

export default Header
