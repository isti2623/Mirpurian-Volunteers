import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { Button, Stack } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './TopHeader.css'
import useAuth from '../../hooks/useAuth';

const TopHeader = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <div className="container">
                <div className='d-flex'>
                    <div>
                        <FontAwesomeIcon className='fs-3 text-secondary mt-4' icon={faPhoneVolume} />
                        <span className='ms-2'>+8801322308092</span>
                        <FontAwesomeIcon className='fs-3 ms-5 text-secondary mt-4' icon={faMailBulk} />
                        <span className='ms-3'>istiaqueahmed2019.bd@gmail.com</span>
                    </div>

                    <div>
                        <Stack direction="horizontal" gap={3}>
                            <div className='container'>

                                <img className='details-header ms-2 mt-3' src={user.photoURL} alt="" />
                                <span className='text-secondary fw-bold ms-2 mt-5'>{user.displayName}</span>


                                {
                                    user.email ?
                                        <Button onClick={logout} className='menu-btn ms-2 mt-4' variant="light"> Logout</Button>
                                        :
                                        <Link to='/login'><Button className='menu-btn' variant="light"> Login</Button></Link>
                                }

                            </div>
                            <NavLink
                                className='top-header-auth text-secondary'
                                to="/signup"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                Signup
                            </NavLink>
                            <Link className='top-header-auth' to='donate-now'> <Button className='mt-1 rounded' variant="success">Donate Now</Button></Link>
                        </Stack>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TopHeader;