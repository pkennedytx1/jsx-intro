import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [currentRoute, setCurrentRoute] = useState('/');
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <Link onClick={() => setCurrentRoute('/')} className="navbar-brand" to='/'>Travel Agency</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link onClick={() => setCurrentRoute('/')} className={`nav-link ${currentRoute === '/' && 'active'}`} to="/">Inquiry</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => setCurrentRoute('/appointments')} className={`nav-link ${currentRoute === '/appointments' && 'active'}`} to='/appointments'>Appointments</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;