import React from "react";
 import {Link} from "react-router-dom"
const Header = () =>{
    return(
        <ul className="header">
            <li>
                 <Link to={'/Home'}>Home</Link> 
               
            </li>
            <li>
            <Link to={'/Details'}>About Me</Link> 
            </li>
            <li>
            <Link to ={'/Skills'}>Skills</Link> 
            </li>
        </ul>
    )
}
export default Header;