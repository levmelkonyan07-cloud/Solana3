import React from 'react';
import './A4.css';
import img_1 from "../../objectPic/build/Mult1.png";
import img_2 from "../../objectPic/build/Mult2.png";
import img_3 from "../../objectPic/build/Mult3.png";
import img_4 from "../../objectPic/build/Mult4.png";
import img_5 from "../../objectPic/build/anybodies.png";
import Zoom from "react-medium-image-zoom";

export default function A4() {
  const li = ["NFTs", "DeFi", "Payments", "Gaming", "DAOs"];
  const icon = [img_1, img_2, img_3, img_4];

  return (
    <div className='a4 x'>
      <div className="carcas fcs">
        
        <div className="all">
          <nav className='sb'>
            <h2>Build for growth.</h2>
            <ul className='x'>
              {
                li.map((elem, index) => <li key={index}>{elem}</li> )
              }
            </ul>
          </nav>
          <main>
            <div className="img"></div>
            <div className="info fcs">
              <img src={img_5} alt="" />
              <p>
                It's time to bridge the digital and physical. <br />
                Anybodies helps established brands like <br />
                Toys'R'Us connect real-life places and <br />
                products with NFTs.
              </p>
              <span>Learn more about NFTson Solana</span>
            </div>
          </main>
          <div className="icons sb">
            {
              icon.map((elem, index) => {
                return (
                  <Zoom key={index}>
                    <img src={elem} alt="" />
                  </Zoom>
                )
              })
            }
          </div>
        </div>

        <h3>Join a thriving community.</h3>

      </div>
    </div>
  )
}
