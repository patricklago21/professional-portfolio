import React from 'react';
import { Github } from 'react-bootstrap-icons';

function Footer() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-top">
                <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <a href="mailto: patricklago21@gmail.com" className="fs-6 text-decoration-none">patricklago21@gmail.com</a>
                </div>

                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="https://github.com/patricklago21" className="nav-link"><Github className="fa-lg" /></a></li>
                </ul>
            </header>
        </div>
    )
};

export default Footer;