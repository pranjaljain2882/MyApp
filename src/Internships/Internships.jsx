import React from 'react';
import './Internships.css';
import { interndata } from "../Data/data.js"
import Navbar from '../Navbar/Navbar';

const Internships = () => {
    function getWidth() {
        return Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth
        );
    }
    return (
        <>
        {/* <Navbar/> */}
            <div className="interndetails">
                <div className='interndata'>
                    {interndata.map((option, index) => {
                        return (
                            <div className="interncard" key={index}>
                                <div className="internimg"><img src={option.img} className="img" /></div>
                                <div className='interntitle'><b>{option.title}</b></div>
                                <div className="interndesc">Date Posted: {option.date}</div>
                                <div className="interndesc">Batch: {option.batch}</div>
                                <div className="makebtnspace"></div>
                                <div className="internbtn"><a href={option.link} target="_blank">Check Here...</a></div>
                            </div>
                        );
                    })}
                </div>
                {/* <Footer /> */}
            </div >
        </>
    )
  };
  
  export default Internships;