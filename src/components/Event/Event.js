import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';

const Event = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://agile-sands-89026.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    console.log(events);
    return (
        <div>
            <div className='container'>
                <InputGroup className="mb-3 mt-5 w-25 ms-auto">
                    <FormControl
                        placeholder="search event"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="secondary" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
                <div className="row">
                    {
                        events.map(event =>

                            <div className="col-lg-4">
                                <img height='500' className='w-100 p-3' src={event.image} alt="" srcset="" />
                                <div className='card shadow'>
                                    <h6 className='text-success text-center fs-2'>{event.title}</h6>

                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default Event;