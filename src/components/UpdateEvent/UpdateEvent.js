import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const UpdateEvent = () => {
    const { productId } = useParams();
    const [isUpdate, setIsUpdated] = useState(null);
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://agile-sands-89026.herokuapp.com/users/${productId}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [productId]);
    console.log(product);
    console.log(productId);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch(`https://agile-sands-89026.herokuapp.com/users/${productId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount) {
                    setIsUpdated(true);
                } else {
                    setIsUpdated(false);
                }
            });
        console.log(data);
    };
    return (
        <div>
            <h1>Updated Title: {product.title}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input
                    className="p-2 m-2"
                    defaultValue={product?.title}
                    {...register("title")}
                    required
                />
                {/* include validation with required or other standard HTML validation rules */}
                <input
                    className="p-2 m-2"
                    type="text"
                    defaultValue={product?.image}
                    {...register("image", { required: true })}
                    required
                />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input className="btn btn-success w-25" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateEvent;