import React from 'react';
import './A5.css';
import img_1 from '../../objectPic/itstime/time2.png';
import img_2 from '../../objectPic/itstime/time3.png';
import img_3 from '../../objectPic/itstime/time4.png';
import img_4 from '../../objectPic/itstime/time1.png';
import img_5 from '../../objectPic/itstime/time5.png';

export default function A5() {
  const object = [
    { id : 1, a : "#18161B", b : "#D077D8", c : "11,000", d : "SOLANA HACKER HOUSE PARTICIPANTS" },
    { id : 2, e : img_1 },
    { id : 3, e : img_2 },
    { id : 4, e : img_3 },
    { id : 5, a : "#18161B", b : "#FBEC37", c : "3,800",  d : "SOLANA BREAKPOINT 2026-27" },
    { id : 6, e : img_4 },
    { id : 7, a : "#18161B", b : "#1BEB96", c : "48,000", d : "DEVELOPERS BUILDING DURING SOLANA HACKATHONS" },
    { id : 8, e : img_5 }
  ];

  return (
    <div className='a5 x'>
        <div className="our">
            {
              object.map((elem, index) => {
                  return (
                    <div className="details fcc" key={elem.id} style={{ backgroundImage : `url(${elem.e})` , backgroundColor : elem.a }}>         
                        <p style={{ color : elem.b }}>{elem.c}</p>
                        <span>{elem.d}</span>
                    </div>
                  )
              })
            }
        </div>
    </div>
  )
}
