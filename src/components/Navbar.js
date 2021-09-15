import React from 'react';

const Navbar = () => (
    <header className="bg-white mb-50">
        <nav className="navbar p-10">
            <div>Library-app</div>
            <ul className="d-flex">
                <li className="ml-10">Sign in</li>
                <li className="ml-10">Sign Up</li>
                <li className="ml-10">Sign Out</li>
            </ul>
        </nav>
    </header>
);

export default Navbar;
