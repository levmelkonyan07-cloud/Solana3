import React from 'react';
import './A1.css';
import a1 from "../../objectPic/upicons/icon1.png";
import a2 from "../../objectPic/upicons/icon2.png";
import a3 from "../../objectPic/upicons/icon3.png";
import a4 from "../../objectPic/upicons/icon4.png";
import a5 from "../../objectPic/upicons/icon5.png";
import a6 from "../../objectPic/upicons/icon6.png";
import a7 from "../../objectPic/upicons/icon7.png";
import Zoom from "react-medium-image-zoom";

export default function A1() {
  const arr = [a1, a2, a3, a4, a5, a6, a7];
  
  return (
    <div className='a1 x'>
      <div className="all fcc">
        <h1>Powerful for developers. <br /> Fast for everyone.</h1>
        <p>Bring blockchain to the people. Solana supports experiences <br /> for power users, new consumers, and everyone in between.</p>
        <div className="btns x">
          <button>START BUILDING</button>
          <button>READ DOCS</button>
        </div>
        <span>POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE WORLD</span>
        <div className="carcas sb" style={{ marginTop: "30px" }}>
          {
            arr.map((elem, index) => {
              return (
                <Zoom key={index}>
                  <img src={elem} alt="" />
                </Zoom>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}


