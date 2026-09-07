import React from 'react';
import './A3.css';

export default function A3() {
    const arr = [
        { id : 1, col : "#1FB2D0", big : "Fast",             title : "Don't keep your users waiting. Solana has block times of 400 milliseconds - and as hardware gets faster, so will the network.",                                              big_2 : "*3,969",           title_2 : "TRANSACTIONS PER SECOND" },
        { id : 2, col : "#D5B80F", big : "Decentralized",    title : "The Solana network is validated by thousands of nodes that operate independently of each other, ensuring your data remains secure and censorship resistant.",                big_2 : "1,675",            title_2 : "VALIDATOR NODES"         },
        { id : 3, col : "#833DD1", big : "Scalable",         title : "Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.01.",                              big_2 : "*163,077,581,394", title_2 : "TOTAL TRANSACTIONS"      },
        { id : 4, col : "#15D687", big : "Energy Efficient", title : "Solana's proof of stake network and other innovations minimize its impact on the environment. Each Solana transaction uses about the same energy as a few Google searches.", big_2 : "0%",               title_2 : "NET CARBON IMPACT"       }
    ];

  return (
    <div className="a3 x">
       <div className="carcas sb">
            <div className="info">
                <h3>Made for <br /> mass adoption.</h3>
                <p>LIVE DATA</p>
            </div>
            
            <div className="section">
                {
                    arr.map((elem, index) => {
                        return (
                            <div className="block fcs" key={elem.id}>
                                <p style={{ paddingLeft : "15px", borderLeft : `2px solid ${elem.col}` }}>{elem.big}</p>
                                <span>{elem.title}</span>
                                <p>{elem.big_2}</p>
                                <span>{elem.title_2}</span>
                            </div>
                        )
                    })
                }
            </div>
       </div>
    </div>
  )
}
