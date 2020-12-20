import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
    return (
        <div className="NavSection">
            <nav class="navbar navbar-expand-lg navbar-dark py-3">
                <a class="navbar-brand" href="#home"><span className="text-success">CINEMA</span> HALL </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link to="/home" class="nav-link">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/donation" class="nav-link">Donation</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/event" class="nav-link">Event</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/Blog" class="nav-link">Blog</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;