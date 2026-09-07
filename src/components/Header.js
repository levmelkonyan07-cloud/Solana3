import React from 'react';
import './Header.css';
import logo from "../objectPic/up/solana.png";
import { NavLink } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa6";

export default function Header() {
  return (
    <div className='header x'>
       <div className="carcas sb">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
          
          <ul className='x'>
             <NavLink to='/learn'>Learn <FaAngleDown/> </NavLink>
             <NavLink to='/build'>Build <FaAngleDown/> </NavLink>
             <NavLink to='/network'>Network <FaAngleDown/> </NavLink>
             <NavLink to= 'community'>Community <FaAngleDown/> </NavLink>
          </ul>

       </div>
    </div>
  )
}
