import React from 'react'
import "./subBox.css"
import Button from "../Button/button.js"

function SubBox() {
  return (
    <div className="subbox">
          <div className='subbox-content'>
            <div className='text-container'>
            <h2>Try RPC Fast node-as-a-service for free and connect to the blockchain immediately</h2>
            </div>
             <div className='button-container'>
              <div className='sub-btn'>
                 <Button buttonStyle={{text: "Start now for free", fontSize: "1.2rem",padding: "10% 5%", backgroundColor: "#FF7000", color: "#fff", borderColor: "#ff7000", width: "100%"}}/>
              </div>
            </div>
          </div>
    </div>
  )
}

export default SubBox;