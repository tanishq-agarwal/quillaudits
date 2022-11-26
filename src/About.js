import React, { useState } from 'react';
import { FiYoutube } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

const About = () => {

    const [model, setModel] = useState(false);
    const getImg = () => {
        setModel(true);
    };

    return (
        <>
            <div className={model ? "model open" : "model"}>
                <iframe width="960" height="550" src="https://www.youtube.com/embed/cDwa_JwuC-w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <GrClose onClick={() => setModel(false)} />
            </div>
            <section className="common-section meals meals-leftside container">
                <div className="meal-section" >
                    <div className="meals-near-you">
                        <div className="meal-items">
                            <h2 className="title">
                            Emerging Web3 Ventures Trust Our Smart Contract Audits & Diligence Services
                            </h2>
                            <p className="main-hero-para">QuillAudits, Making web3 a safer place</p>
                            <div className='order'>
                                <button className="btn btn-style">Request Free Quote</button>
                                <div className='meet-chefs' onClick={() => getImg()} >
                                    <FiYoutube className='youtube' />
                                    <span>Explore Services</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="meals-img">
                    <lottie-player src="81943.json" background="transparent" speed="1"></lottie-player>
                    </div>
                </div>

            </section>
        </>
    )
}

export default About;