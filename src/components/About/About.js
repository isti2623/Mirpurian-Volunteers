import React from 'react';
import childOne from '../../images/child-one.jpg'
import save from '../../images/save.png'
import fresh from '../../images/fresh.png'
import './About.css'

const About = () => {
    return (
        <div>
            <div className='container about-part '>
                <div className="row">
                    <div className="col-lg-6">
                        <img src={childOne} alt="" srcset="" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className='fw-bold text-dark'>ABOUT US</h2>
                        <h1 className='custom-h1'>Mirpurian is <span className='text-warning'>Nonprofit</span> Organization <span className='text-success'>For Help</span> Children.
                        </h1>
                        <p className='text-secondary'>It is a long established fact that a reader will be distracted by thethe readable content off a page when looking at its layout point using Lorem Ipsum is that it has.

                        </p>
                        <div className="row my-3">
                            <div className="col-lg-6">
                                <img className='save' src={save} alt="" srcset="" />
                                <span className='fw-bold fs-3 ms-3'>Save Children.</span>
                            </div>
                            <div className="col-lg-6">
                                <img className='fresh' src={fresh} alt="" srcset="" />
                                <span className='fw-bold fs-3 ms-3'>Fresh And Clean.</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;