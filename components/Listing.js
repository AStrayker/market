import React, { useEffect, useState } from 'react';

function Listing() {
    const [ads, setAds] = useState([]);

    useEffect(() => {
        // Загрузка объявлений из Firebase
        const fetchAds = async () => {
            const adsRef = firebase.firestore().collection('ads');
            const snapshot = await adsRef.limit(30).get();
            const adsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setAds(adsList);
        };

        fetchAds();
    }, []);

    return (
        <div className="listing">
            {ads.map(ad => (
                <div key={ad.id} className="ad">
                    <h2>{ad.title}</h2>
                    <p>{ad.description}</p>
                    <p>{ad.price} грн</p>
                </div>
            ))}
        </div>
    );
}

export default Listing;
