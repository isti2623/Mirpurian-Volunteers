import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';

const Event = () => {
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
            </div>
        </div>
    );
};

export default Event;