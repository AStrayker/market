import React from 'react';

function AdDetail({ ad }) {
    return (
        <div className="ad-detail">
            <h1>{ad.title}</h1>
            <p>{ad.description}</p>
            <p>{ad.price} грн</p>
        </div>
    );
}

export default AdDetail;
