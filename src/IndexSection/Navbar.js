import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/images/coderdocs-logo.svg'

const Navbar = () => {
    return (
        <>
            <header className="header fixed-top">

                <div className="branding docs-branding">
                    <div className="container-fluid position-relative py-2">
                        <div className="docs-logo-wrapper">
                            <div className="site-logo"><a className="navbar-brand" href="index.html">
                                <img className="logo-icon me-2" src={logo} alt="logo" />
                                <span className="logo-text">Stack<span className="text-alt">Docs</span></span></a></div>
                        </div>

                        <div className="docs-top-utilities d-flex justify-content-end align-items-center">

                            <ul className="social-list list-inline mx-md-3 mx-lg-5 mb-0 d-none d-lg-flex">
                                <li className='list-inline-item text-decoration-none'>
                                    <Link to="/docs">Docs</Link>
                                </li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-github fa-fw"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-twitter fa-fw"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-slack fa-fw"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-product-hunt fa-fw"></i></a></li>
                            </ul>
                            <a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderdocs-free-bootstrap-5-documentation-template-for-software-projects/" className="btn btn-primary d-none d-lg-flex">Download</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar;