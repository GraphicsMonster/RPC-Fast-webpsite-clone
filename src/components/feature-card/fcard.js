import React from 'react'
import "./fcard.css"

function Fcard(props){
    return (
        <div className='fcard'>
            <div className='svg'>
                {props.svg}
            </div>
            <div className='title'>
                <h2>
               {props.title}
               </h2>
            </div>
            <div className='text'>
                <p>
               {props.text}
               </p>
            </div>
        </div>
    )
}

export default Fcard