import React from 'react'
import Button from '../Button/button.js'
import "./navbar.css";

export default function Navbar() {

    const ButtonStyle = {
        text: "Sign up",
        backgroundColor: "#FF7000",
        color: "#fff"
    }
  return (
    <>
     <nav>
        <ul>
            <li className='brand'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 width="100" height="100"
                 viewBox="0 0 50 50">
                 <path d="M 6 3 C 4.346 3 3 4.346 3 6 L 3 16 C 3 17.654 4.346 19 6 19 L 9 19 L 9 21 A 1.0001 1.0001 0 1 0 11 21 L 11 19 L 16 19 C 17.654 19 19 17.654 19 16 L 19 12 L 24 12 A 1.0001 1.0001 0 1 0 24 10 L 19 10 L 19 6 C 19 4.346 17.654 3 16 3 L 6 3 z M 34 3 C 32.346 3 31 4.346 31 6 L 31 10 L 28 10 A 1.0001 1.0001 0 1 0 28 12 L 31 12 L 31 16 C 31 17.654 32.346 19 34 19 L 38 19 L 38 24 A 1.0001 1.0001 0 1 0 40 24 L 40 19 L 44 19 C 45.654 19 47 17.654 47 16 L 47 6 C 47 4.346 45.654 3 44 3 L 34 3 z M 9.984375 23.986328 A 1.0001 1.0001 0 0 0 9 25 L 9 31 L 6 31 C 4.346 31 3 32.346 3 34 L 3 44 C 3 45.654 4.346 47 6 47 L 16 47 C 17.654 47 19 45.654 19 44 L 19 40 L 22 40 A 1.0001 1.0001 0 1 0 22 38 L 19 38 L 19 34 C 19 32.346 17.654 31 16 31 L 11 31 L 11 25 A 1.0001 1.0001 0 0 0 9.984375 23.986328 z M 38.984375 26.986328 A 1.0001 1.0001 0 0 0 38 28 L 38 30 L 34 30 C 32.346 30 31 31.346 31 33 L 31 38 L 26 38 A 1.0001 1.0001 0 1 0 26 40 L 31 40 L 31 43 C 31 44.654 32.346 46 34 46 L 44 46 C 45.654 46 47 44.654 47 43 L 47 33 C 47 31.346 45.654 30 44 30 L 40 30 L 40 28 A 1.0001 1.0001 0 0 0 38.984375 26.986328 z"></path>
            </svg>
            </li>
            <li className='anchors'>
                <ul>
            <li className='nav-item'>
               <a href="/">Overview</a>
            </li>
            <li>
                <a href="/">Chains</a>
            </li>
            <li>
               <a href="/">Pricing</a>
            </li>
            <li>
                <a href="/">About</a>
            </li>
            </ul>


            </li>

           <li className='buttons'>
            <ul>
            <li>
                <Button buttonStyle={{text: "Log in", backgroundColor: "transparent", color: "black", borderColor: "#ff7000"}} />
                <Button buttonStyle={ButtonStyle}/>
            </li>
            </ul>
            </li>

        </ul>
     </nav>
     </>
  )
}