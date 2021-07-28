import React from 'react';
import { FileCodeFill } from 'react-bootstrap-icons';

function Nav() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <FileCodeFill className="mx-2" />
                    <span className="fs-4">Patrick Lago</span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="#" className="nav-link">Projects</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Resume</a></li>
                </ul>
            </header>
        </div>
    )
};

export default Nav;