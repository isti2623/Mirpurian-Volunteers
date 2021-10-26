import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import './TopBanner.css'
const TopBanner = () => {
    return (
        <div className=' banner mt-2'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">

                    </div>
                    <div className="col-lg-4">
                        <div className='text-part'>
                            <h4 className='text-warning fs-2 ms-1'>Go For Help</h4>
                            <h1 className='text-white ms-1 custom-h2'>They Are Wait For Some Food</h1>
                            <p className='text-white fw-bold ms-1'>The mission of William L. Valentine Elementary School, in partnership with parents and community, is to provide students with an academically focused program in a positive and caring learning environment. </p>
                            <Link className='top-header-auth' to='donate-now'> <Button className='mt-1 rounded' variant="success">Donate Now</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;