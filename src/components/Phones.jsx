import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Phones = () => {
    const phones = useLoaderData();
    console.log(phones);
    
    return (
        <div>
            <h3>all phones data is comming :{phones.length}</h3>
            {
                phones.map(phone=><div key={phone.id}>
                    <Link to={`/phone/${phone.id}`} phone={phone}>{phone.name}</Link>
                </div>)
            }
        </div>
    );
};

export default Phones;