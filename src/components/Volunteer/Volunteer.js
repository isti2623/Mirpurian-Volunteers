import React from 'react';
import './Volunteer.css'
import one from '../../images/one.png'
import two from '../../images/two.png'
import three from '../../images/three.png'
import four from '../../images/four.png'

const Volunteer = () => {
    return (
        <div className='container'>
            <h2 className='fw-bold text-center about-part text-success'>VOLUNTEER</h2>
            <h1 className='custom-h1 text-center mt-5 mb-2'>Our Great Volunteer
            </h1>
            <p className='text-secondary text-center mb-5'>It is a long established fact that reader distracted by the the readable content off page looking at its layout point.

            </p>

            <div className="row mt-5 mb-5">
                <div className="col-lg-3">
                    <img className='image-hov' src={one} alt="" />
                    <div className='card text-center shadow p-2 my-3'>
                        <h2 className='card-text'>Adriane Newby</h2>
                        <h6>Volunteer</h6>
                    </div>
                </div>
                <div className="col-lg-3">
                    <img className='image-hov' src={two} alt="" />
                    <div className='card text-center shadow p-2  my-3'>
                        <h2 className='card-text'>Allene Castaneda</h2>
                        <h6>Volunteer</h6>
                    </div>
                </div>
                <div className="col-lg-3">
                    <img className='image-hov' src={three} alt="" />
                    <div className='card text-center shadow p-2 my-3'>
                        <h2 className='card-text'>Malinda Willou</h2>
                        <h6>Volunteer</h6>
                    </div>
                </div>
                <div className="col-lg-3">
                    <img className='image-hov' src={four} alt="" />
                    <div className='card text-center shadow p-2 my-3'>
                        <h2 className='card-text'>Wilburn Hatfield</h2>
                        <h6>Volunteer</h6>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Volunteer;