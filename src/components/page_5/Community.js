import React from 'react'
import "./Community.css";
import { GoArrowUpRight } from 'react-icons/go';

import img_1  from "../../pagesImages/networkpic/network.jpg";
import img_2  from "../../pagesImages/networkpic/podcast.jpg";
import img_3  from "../../pagesImages/networkpic/youtube.jpg";

export default function Community() {
    return (
        <div className='community x'>
            <div className='carcas fcs'>
                <div className='info fcs'>
                    <h3>Go to the source.</h3>
                    <p>Read the documentation for Solana and popular tools.</p>
                </div>

                <div className='top-panels'>
                    <div className='doc-card fcs'>
                        <div className='doc-header'>
                            <h3>Solana Docs</h3>
                            <button>VIEW ALL <GoArrowUpRight /></button>
                        </div>
                        <span>Learn how Solana works and get a high-level understanding of Solana's architecture.</span>
                    </div>

                    <div className='doc-card fcs'>
                        <div className='doc-header'>
                            <h3>Metaplex Docs</h3>
                            <button>VIEW ALL <GoArrowUpRight /></button>
                        </div>
                        <span>Learn what you build with Metaplex, make the process of creating and launching NFTs easier.</span>
                    </div>
                </div>

                <div className='changelog-section'>
                    <div className='changelog-content fcs'>
                        <h3>Solana Changelog</h3>
                        <span>Some more Solana changes from Jacob & Joe. Subscribe to the newsletter: https://solana.us17.list-manage.com/s... Proposal - Priced Compute Units: ...</span>
                        <button className='latest-btn'>LATEST EPISODE</button>
                    </div>
                    <div className='changelog-image-wrapper'>
                        <img src={img_1} alt="Solana Changelog" />
                    </div>
                </div>

                <div className='bottom-panels'>
                    <div className='bottom-card dev-update fcs'>
                        <h3>Solana Developer Update</h3>
                        <span>Sign up to the newsletter and learn about new resources, new commits, new proposals, and more.</span>
                        <div className='subscribe-box'>
                            <input type="email" placeholder='Email' />
                            <button>SIGN UP</button>
                        </div>
                    </div>

                    <div className='bottom-card more-resources fcs'>
                        <h3>Even more resources</h3>
                        <span>More videos, more episodes. Discussions between industry leaders in both blockchain and technology, our team, and community developers.</span>
                        <div className='resource-buttons'>
                            <button className='res-btn'>
                                <img src={img_3} alt="YouTube" className='res-img' /> YOUTUBE
                            </button>
                            <button className='res-btn'>
                                <img src={img_2} alt="Podcast" className='res-img' /> PODCAST
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}