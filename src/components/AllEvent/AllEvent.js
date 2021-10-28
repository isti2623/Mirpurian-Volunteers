import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Admin from '../Admin/Admin';


const AllEvent = () => {
    let deleteCount = 0;
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const email = user?.email;
    useEffect(() => {
        fetch(`https://agile-sands-89026.herokuapp.com/allEvents/${email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [email, deleteCount]);
    console.log(orders);

    //Delete Part


    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://agile-sands-89026.herokuapp.com/allEvents')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log(products);
            })
    }, [products]);

    //DELETE AN Products
    const handleDeleteUser = id => {
        const url = `https://agile-sands-89026.herokuapp.com/allEvents/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    console.log(data);
                    const remainingProducts = orders.filter(order => order._id !== id);
                    console.log(remainingProducts);
                    console.log(products);
                    setOrders(remainingProducts);
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