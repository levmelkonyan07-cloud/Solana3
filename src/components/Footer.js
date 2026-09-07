import React from 'react';
import './Footer.css';
import mini from "../../src/objectPic/down/minilogo.png"
import v1 from "../../src/objectPic/down/v1.png"
import v2 from "../../src/objectPic/down/v2.png"
import v3 from "../../src/objectPic/down/v3.png"
import v4 from "../../src/objectPic/down/v4.png"
import v5 from "../../src/objectPic/down/v5.png"
import v6 from "../../src/objectPic/down/v6.png"
import { AiOutlineCopyright } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";

export default function Footer() {
  return (
    <div className='footer x'>
      <div className="carcas sb">
        <div className="one fcs">
          <img src={mini} alt="" />
          <span>Managed by Solana Foundation</span>
          <div className="icons sb">
            <img className='bb' src={v1} alt="" />
            <img className='bb' src={v2} alt="" />
            <img className='bb' src={v3} alt="" />
            <img className='bb' src={v4} alt="" />
            <img className='bb' src={v5} alt="" />
            <img className='bb' src={v6} alt="" />
          </div>
          <p> <AiOutlineCopyright /> 2026 Solana Foundation. All rights reserved.</p>
        </div>
        <ul className='next'>
          <li>SOLANA</li>
          <li>Grants</li>
          <li>Break Solana</li>
          <li>Media Kit</li>
          <li>Careers</li>
          <li>Disclaimer</li>
        </ul>
        <ul>
          <li>GET CONNECTED</li>
          <li>Ecosystem</li>
          <li>Blog</li>
          <li>Newsletter</li>
        </ul>
        <h3 className='x'><TbWorld /> EN</h3>
      </div>
    </div>
  )
}
