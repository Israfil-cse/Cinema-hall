import React, { useEffect, useState } from 'react';
import fakeData from '../../volunteer-fakedata/fakeData';
import SitBokking from '../SitBokking/SitBokking';
import randomColor from 'randomcolor';
const Bokking = () => {
    const [data, setData] = useState(fakeData);
    return (
        <div>
            <div className="text-center pt-2">
                <h1>Book seats as much as you like :)</h1>
            </div>
            <div className="row">
                {
                    data.map(sitInfo => <SitBokking sitInfo={sitInfo} color={randomColor()} key={sitInfo.id}></SitBokking>)
                }
            </div>
        </div>
    );
};

export default Bokking;