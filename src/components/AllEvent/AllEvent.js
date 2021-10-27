import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Admin from '../Admin/Admin';

const AllEvent = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const email = user?.email;
    useEffect(() => {
        fetch(`http://localhost:5000/allEvents/${email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [email]);
    console.log(orders);

    //Delete Part

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allEvents')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products]);

    //DELETE AN Products
    const handleDeleteUser = id => {
        const url = `http://localhost:5000/allEvents/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainingProducts = products.filter(product => product._id !== id);
                    setProducts(remainingProducts);
                }
            })
    }
    return (
        <div>
            <Admin></Admin>
            <div>

                <h1>I am Dashboard {orders.length}</h1>
                <div className="all-products">
                    <div className="row container text-center">
                        {orders?.map((pd, index) => (
                            <div className="col-md-6 col-lg-4">
                                <div className=" border border p-2 m-2">
                                    <h5>{pd?.title}</h5>
                                    <img className='w-100' src={pd?.image} alt="" srcset="" />
                                    <button onClick={() => handleDeleteUser(pd._id)} className="btn btn-danger m-2">delete</button>
                                    <Link to={`events/update/${pd._id}`}> <Button className='ms-5' variant="success">Update</Button></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllEvent;