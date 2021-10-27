import React from 'react';
import { Stack, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Admin = () => {
    return (
        <div>

            <Stack direction="horizontal" gap={3}>
                <div className='container ms-5 p-3'>
                    <Link to='/add-event'><Button className='p-2' variant="secondary">Add Event</Button></Link>
                    <Link to='/all-events'><Button className='ms-5' variant="warning">All Events</Button></Link>
                </div>
            </Stack>
        </div>
    );
};

export default Admin;