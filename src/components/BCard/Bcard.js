// This component is called Bcard where B stands for Box.

import React from 'react'
import "./Bcard.css"

function Bcard({svg, text, marginLeft, backgroundColor, borderColor}) {

  return (
    <div className='card' style={{marginLeft: marginLeft, backgroundColor: backgroundColor, borderColor: borderColor}}>
        <div className='svg-container'>
           <>{svg}</>
        </div>
        <div className='text-container'>
             <>{text}</>
        </div>
    </div>
  )

}

export default Bcard