import React, { useState } from 'react'
import Catagory from './Menu/Catagory'
import Header from './Menu/Header'
import Data from './Menu/Data'
function App() {
  const [use,setUse]=useState(Data)
  const [cat,setCat]=useState([])
  const Flt=(es)=>{
    if(es==="all"){
      return setUse(Data)
    }
    const Fs= Data.filter((e)=>e.cat===es)
     setUse(Fs)
  }
  return (
    <div>
      <Header Ft={Flt}/>
      {use.map((e)=><Catagory key={e.id} e={e}/>)}
    </div>
  )
}

export default App
