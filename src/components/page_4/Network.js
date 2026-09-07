import React from 'react';
import './Network.css';
import { GoArrowUpRight } from "react-icons/go";

export default function Network() {
    const obj = [
        { id : 1, a : "Core Documentation",     b : "The official Solana documentation on developing, validators, SPL tokens, wallets and more." },
        { id : 2, a : "Solana Cookbook",        b : "The Solana Cookbook is a developer resource that provides the essential concepts and references for building applications on Solana." },
        { id : 3, a : "Solana Stack Exchange",  b : "Solana Stack Exchange is a question and answer site for Solana software users and developers." },
        { id : 4, a : "Solana Playground",      b : "Easily build, deploy and test Solana programs and smart contracts from a browser IDE." },
        { id : 5, a : "create-solana-dapp",     b : "Get up and running fast with Solana dApps, generate a project template in seconds." },
        { id : 6, a : "Anchor DocS",            b : "Anchor is a framework for Solana s Sealevel runtime providing several convenient developer tools for writing smart contracts." },
        { id : 7, a : "Solana Program Library", b : "The Solana Program Library (SPL) is a collection of on-chain programs targeting the Sealevel parallel runtime." },
        { id : 8, a : "Program Examples",       b : "A list of curated examples for a wide range of use cases implemented using on-chain programs." }
    ];

  return (
    <div className="network x">
        <div className="carcas fcs">
            <div className="info fcs">
                <h3>Dig deeper.</h3>
                <p>Learn from resources across the greater Solana ecosystem.</p>
            </div>
            <div className="panel">
                {
                    obj.map((elem, index) => {
                        return (
                            <div className="block fcs">
                                <p>TOOL / LIBRARY</p>
                                <h3>{elem.a}</h3>
                                <span>{elem.b}</span>
                                <button>LEARN MORE <GoArrowUpRight /></button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
