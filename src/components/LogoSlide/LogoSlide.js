import React from 'react';
import logoOne from '../../images/logo-one.png'
import logoTwo from '../../images/logo-two.png'
import logoThree from '../../images/logo-three.png'
import logoFour from '../../images/logo-four.png'
import logoFive from '../../images/logo-five.png'


const LogoSlide = () => {
    return (
        <div className='bg-success p-2 my-5'>
            <div className='container my-5'>
                <div className="row">
                    <div className="col-lg-2">
                        <img src={logoOne} alt="" />
                    </div>
                    <div className="col-lg-2">
                        <img src={logoTwo} alt="" />
                    </div>
                    <div className="col-lg-2">
                        <img src={logoThree} alt="" />
                    </div>
                    <div className="col-lg-2">
                        <img src={logoFour} alt="" />
                    </div>
                    <div className="col-lg-2">
                        <img src={logoOne} alt="" />
                    </div>
                    <div className="col-lg-2">
                        <img src={logoFive} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoSlide;