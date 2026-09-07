import React from 'react';
import './A2.css';

export default function A2() {
    const arr = [
        { id : 1, c1 : "#7E20EE", c2 : "#31C4AF", num : "11.5M+",   title : "ACTIVE ACCOUNTS" },
        { id : 2, c1 : "#00A7DB", c2 : "#005FF7", num : "21.9M",    title : "NFTS MINTED" },
        { id : 3, c1 : "#027494", c2 : "#00E8B6", num : "$0.00025", title : "AVERAGE COST PER TRANSACTION" }
    ];
    
  return (
    <div className='a2 x'>
       <div className="carcas sb">
            <h3>Join a community <br /> of millions.</h3>
            
            <div className="random_numbers fcs">
                {
                    arr.map((elem, index) => {
                        return (
                            <div className="info" key={elem.id}>
                                <p style={{ background : `linear-gradient(to right, ${elem.c1}, ${elem.c2})` }}>{elem.num}</p>
                                <span>{elem.title}</span>
                            </div>
                        )
                    })
                }
            </div>
       </div>
    </div>
  )
}
