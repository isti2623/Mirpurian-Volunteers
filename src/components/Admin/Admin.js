import React from 'react';
import { Stack, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Admin = () => {
    return (
        <div>

            <Stack direction="horizontal" gap={3}>
                <div className='container ms-5 p-3'>
                    <Link to='/addEvent'><Button className='p-2' variant="secondary">Add Event</Button></Link>
                    <Link to='/allEvents'><Button className='ms-5' variant="warning">All Your Events</Button></Link>
                </div>
            </Stack>
        </div>
    );
};

export default Admin;