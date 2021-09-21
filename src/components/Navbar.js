import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <header className="bg-white mb-50">
        <nav className="navbar p-10">
            <div>
                <NavLink to="/" className="navItem">
                        <b>Library App</b>
                </NavLink>
            </div>
            <ul className="d-flex">
                <li className="ml-10">
                    <NavLink to="/sign-up" className="navItem">
                        Sign Up
                    </NavLink>
                </li>
                <li className="ml-10">
                    <NavLink to="/sign-in" className="navItem">
                        Sign In
                    </NavLink></li>
                <li className="ml-10">Sign Out</li>
            </ul>
        </nav>
    </header>
);

export default Navbar;
