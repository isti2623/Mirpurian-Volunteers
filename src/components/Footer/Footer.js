import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className='bg-dark p-3'>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-4">
                        <img src={logo} alt="" srcset="" />
                        <span className='text-white fs-3 fw-bold mt-3 ms-2'>Mirpurian Volunteers</span>
                        <p className='text-white mt-3 '>Build and Earn with your online store with lots of cool and exclusive tp-features</p>

                    </div>
                    <div className="col-lg-4 ms-5">
                        <h2 className='text-white fs-3 fw-bold ms-5'>Useful Links
                        </h2>
                        <div className='text-light p-2 mt-4 ms-5'>
                            <Link className='text-decoration-none text-white ms-5' to='/about'> <p>About Us</p></Link>
                            <Link className='text-decoration-none text-white ms-5' to='contact'> <p>Contact Us</p></Link>
                            <Link className='text-decoration-none text-white ms-5' to='event'> <p>Our Event</p></Link>


                        </div>
                    </div>

                    <div className="col-lg-3 ms-5">
                        <h2 className='text-white fs-3 fw-bold ms-5'>Contact
                        </h2>
                        <div className='text-light p-2 mt-4 ms-5'>
                            <p>online store with lots of cool and exclusive tp-features</p>

                            <FontAwesomeIcon className='fs-3  text-secondary mt-4' icon={faLocationArrow} />
                            <span>Dhaka,Bangladesh</span>





                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;