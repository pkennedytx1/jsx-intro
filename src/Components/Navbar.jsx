import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../Contexts/DarkModeContext';

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    const handleStyleModeChange = () => {
        toggleDarkMode();
    }
    return (
        <nav className={`navbar navbar-expand-lg ${darkMode ? 'bg-dark text-light' : 'bg-light'}`}>
            <div className="container-fluid">
            <Link className={`navbar-brand ${darkMode && 'text-light'}`} to='/'>Travel Agency</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className={`nav-link active ${darkMode && 'text-light'}`} aria-current="page" to='/'>Inquiry</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${darkMode && 'text-light'}`} to='/appointments'>Appointments</Link>
                    </li>
                </ul>
            </div>
            <div class="form-check form-switch">
                <input onChange={() => handleStyleModeChange()} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label class="form-check-label" for="flexSwitchCheckDefault">{darkMode ? 'Dark Mode' : 'Light Mode'}</label>
            </div>
            </div>
        </nav> 
    )
}

export default Navbar;