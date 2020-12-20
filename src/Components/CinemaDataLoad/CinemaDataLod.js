import React, { useEffect, useState } from 'react';
import './CinemaDataLoad.css';
import spin from"../../logos/spin.gif";
import Category from '../Category/Category';
import randomColor from 'randomcolor';

const CinemaDataLod = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=3a0288dd5a95a2f1e4f2d33714895290')
            .then(res => res.json())
            .then(data => setItem(data.results))
    }, []);
    // console.log(item);

    return (
        <div className="catagoty">
            <div className="container">
                <div>
                    <h3 className="text-center text-uppercase text-white pt-3">Search for your favorite movies</h3>
                    <form className="d-flex">
                        <input type="text" className="form-control" placeholder="Search" />
                    </form>
                </div>


                {/* data maping */}
                
                <div className="row">
                    <div style={{ width: '100%', marginTop: '100px'}} className="d-flex justify-content-center">
                        <div style={{ width: '50px' }}>
                            {
                                item.length === 0 && <img src={spin} alt="" />
                            }
                        </div>
                    </div>
                    {
                        item.map(items => <Category color={randomColor()} items={items} key={items.id}></Category>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CinemaDataLod;