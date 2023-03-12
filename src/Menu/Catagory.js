import React, { useState } from 'react'
import './Catagory.css'
import Data from './Data'

function Catagory({e,key}) {
  return (
    <div className='cat'>
      <div className="cats" key={key}>
      <div>
      <img src="" alt="" srcset="" />
       <div className="nm">
       <h3>{e.name}</h3>
       <h3>price</h3>
       </div>
       <div className="des">
       <p>{e.info}</p>
       </div>
      </div>
      </div>
    </div>
  )
}

export default Catagory
