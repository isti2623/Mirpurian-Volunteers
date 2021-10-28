import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Admin from '../Admin/Admin';
import './AddEvent.css'

const AddEvent = () => {
    const { user } = useAuth();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        data.email = user.email;
        console.log(data);
        fetch("https://agile-sands-89026.herokuapp.com/addEvents", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    alert('added successfully');
                    reset();
                }
            });
    };



    return (
        <div>
            <Admin></Admin>
            <h2 className='custom-h1 text-center mb-3'>Add Your Event</h2>
            <div className='form-part'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input className='p-2 m-2' placeholder='title' {...register("title")} />
                    <br />

                    {/* include validation with required or other standard HTML validation rules */}
                    <input className='p-2 m-2' placeholder='image-url' {...register("image")} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />
                    <input className='btn btn-success ms-2' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddEvent;