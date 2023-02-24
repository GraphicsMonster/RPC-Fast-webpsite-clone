import React from 'react'
import "./button.css"

function Button(prop) {
 
    const {buttonStyle} = prop;
 
  return (
    
       <button style={{backgroundColor: buttonStyle.backgroundColor, color: buttonStyle.color, fontSize: buttonStyle.fontSize, padding: buttonStyle.padding,  borderColor: buttonStyle.borderColor, width: buttonStyle.width}}>

              {buttonStyle.text}

       </button>
    
  )
}

export default Button