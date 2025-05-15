import React from 'react';
import { useLoaderData } from 'react-router';

const SinglePhone = () => {
    const phone = useLoaderData();
    // console.log(phone);
     
    return (
        <div>
            <h2>{phone.name}</h2>
            <h4>Brand : {phone.brand}</h4>
            <img src={phone.img} alt={name} />
            <p> camera: {phone.camera}</p>

        </div>
    );
};

export default SinglePhone;