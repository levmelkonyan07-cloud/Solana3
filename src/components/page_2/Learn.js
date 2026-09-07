import React from 'react';
import './Learn.css';
import Zoom from "react-medium-image-zoom";
import learn_img from '../../pagesImages/learnpic/learn.jpg';
import { LiaClipboardListSolid } from "react-icons/lia";

export default function Learn() {
  return (
    <div className='learn x'>
        <div className="carcas">
           <div className="info fcs">
            <h2>Developer <br /> Resources</h2>
            <p>
              A manual for joining the Solana <br />
              ecosystem. By builders for builders.
            </p>
            <div className="btns x">
              <button>BUILD NOW</button>
              <button className='x'>STACK EXCHANGE <LiaClipboardListSolid/> </button>
            </div>
           </div>
           <Zoom>
              <img src={learn_img} alt="" />
           </Zoom>
           <div className="info fcs">
              <h3>Get started.</h3>
              <p>Use these Solana Foundation and community courses to begin your journey into Solana development.</p>
           </div>
        </div>
    </div>
  )
}
