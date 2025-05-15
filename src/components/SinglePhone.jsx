import React from 'react';
import { useLoaderData } from 'react-router';

const SinglePhone = () => {
    const phone = useLoaderData();
    // console.log(phone);
     
    return (
        <div>
            <h2> Name = {phone.name}</h2>
            <h4>Brand = {phone.brand}</h4>
            <img src={phone.img} alt={name} />
            <p> camera = {phone.camera}</p>
            <p>screenSize = {phone.screenSize}</p>
            <p>os = {phone.os}</p>

        </div>
    );
};

export default SinglePhone;