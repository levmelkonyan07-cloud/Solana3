import React from 'react';
import './Build.css';
import img_1 from '../../pagesImages/buldpic/bulid0.jpg';
import img_2 from '../../pagesImages/buldpic/bulid1.png';
import img_3 from '../../pagesImages/buldpic/bulid2.png';
import img_4 from '../../pagesImages/buldpic/bulid3.png';
import img_5 from '../../pagesImages/buldpic/bulid4.png';
import img_6 from '../../pagesImages/buldpic/bulid5.png';
import img_7 from '../../pagesImages/buldpic/bulid6.png';
import { FiArrowRightCircle } from "react-icons/fi";

export default function Build() {
    const obj = [
        { id : 1, a : img_1, b : "17 chapters",  c : "Quickstart your Solana development starting from nothing to complex programs.", z : "Solana Development Course" },
        { id : 2, a : img_2, b : "14 Chapters",  c : "Buildspace" },
        { id : 3, a : img_3, b : "12 Chapters",  c : "Solana Bytes" },
        { id : 4, a : img_4, b : "1 Chapter",    c : "Scaffold Series" },
        { id : 5, a : img_5, b : "3 Chapters",   c : "Freecodecamp Solana Course" },
        { id : 6, a : img_6, b : "167 Chapters", c : "Solana Development by Knox" },
        { id : 7, a : img_7, b : "8 Chapters",   c : "Solana Bootcamp" }
    ];

  return (
    <div className='build x'>
        <div className="carcas">
            {
                obj.map((elem, index) => {
                    return (
                        <div key={elem.id} className="block fcs" style={{ background : `url(${elem.a})` }}>
                            <button>{elem.b}</button>
                            <p>{elem.z}</p>
                            <span>{elem.c}</span>
                            <FiArrowRightCircle />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
