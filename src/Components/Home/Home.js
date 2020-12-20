import React from 'react';
import CinemaDataLod from '../CinemaDataLoad/CinemaDataLod';
import NavBar from '../Navbar/NavBar';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <CinemaDataLod></CinemaDataLod>
        </div>
    );
};

export default Home;