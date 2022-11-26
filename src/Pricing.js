import React from 'react';
import './App.css';

const Pricing = () => {
  return (
    <>
         <section className="common-section meals meals-leftside price">
            <div className="container">
                <div className="pricing">
                    <div className="pricing1">
                        <p className='money'>$12.8B</p>
                        <p>Amount Lost To DeFi Hacks in 2021</p>
                    </div>
                    <div className="pricing1">
                    <p className='money'>600K</p>
                        <p>Lines of Codes Secured by QuillAudits</p>
                    </div>
                    <div className="pricing1">
                    <p className='money'>$14.6B</p>
                        <p>Amount Protected By QuillAudits</p>
                    </div>
                </div>
            </div>
         </section>
    </>
  )
}

export default Pricing;