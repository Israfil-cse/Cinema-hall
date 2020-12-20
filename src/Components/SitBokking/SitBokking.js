import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../logos/chair.jpg';

const SitBokking = (props) => {
    const sitInfo = props.sitInfo;
    const { name, image } = sitInfo;
    return (
        <div className="col-md-4 pt-5">

            <div className="d-flex justify-content-center">
                <div style={{ background: props.color, height: '250px', width: '95%', borderRadius: '20px' }} className='mb-3 d-flex justify-content-center align-items-center '>
                    <Link to="/userInfo">
                        <div>
                            <img src={img} style={{ height: '180px', width: '400px', borderRadius: '20px' }} alt="" className="img-fluid mt-3" />
                        </div>
                        <div className="text-center">
                            <h1>{name}</h1>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default SitBokking;