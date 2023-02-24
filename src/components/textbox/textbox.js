import React from "react";
import "./textbox.css"
export default function TextBox(props) {

    const {message, style} = props;

    return (

       <div className="box" style={{width: style.width, borderColor: style.borderColor, marginLeft: style.marginLeft, marginTop: style.marginTop}}>


        {message.title && <h3>

            {message.title}

        </h3>}


          <p>

            {message.text}
            
          </p>

       </div>
    )
}