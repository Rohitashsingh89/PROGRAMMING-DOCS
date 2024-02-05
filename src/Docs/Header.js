import React, { useEffect } from 'react';
import logo from './../assets/images/coderdocs-logo.svg'

const Header = () => {

    useEffect(() => {

        // Example: Responsive Sidebar
        const sidebarToggler = document.getElementById('docs-sidebar-toggler');
        const sidebar = document.getElementById('docs-sidebar');

        const responsiveSidebar = () => {
            let w = window.innerWidth;
            if (w >= 1200) {
                sidebar.classList.remove('sidebar-hidden');
                sidebar.classList.add('sidebar-visible');
            } else {
                sidebar.classList.remove('sidebar-visible');
                sidebar.classList.add('sidebar-hidden');
            }
        };

        responsiveSidebar();

        window.onresize = function () {
            responsiveSidebar();
        };

        const handleSidebarToggle = () => {
            if (sidebar.classList.contains('sidebar-visible')) {
                sidebar.classList.remove('sidebar-visible');
                sidebar.classList.add('sidebar-hidden');
            } else {
                sidebar.classList.remove('sidebar-hidden');
                sidebar.classList.add('sidebar-visible');
            }
        };

        sidebarToggler.addEventListener('click', handleSidebarToggle);

        // Cleanup
        return () => {
            window.onresize = null;
            sidebarToggler.removeEventListener('click', handleSidebarToggle);
        };
    }, []);

    return (
        <>
            <header className="header fixed-top">
                <div className="branding docs-branding">
                    <div className="container-fluid position-relative py-2">
                        <div className="docs-logo-wrapper">
                            <button id="docs-sidebar-toggler" className="docs-sidebar-toggler docs-sidebar-visible me-2 d-xl-none"
                                type="button">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div className="site-logo"><a className="navbar-brand" href="index.html"><img className="logo-icon me-2"
                                src={logo} alt="logo" /><span className="logo-text">Stack<span
                                    className="text-alt">Docs</span></span></a></div>
                        </div>
                        <div className="docs-top-utilities d-flex justify-content-end align-items-center">
                            <div className="top-search-box d-none d-lg-flex">
                                <form className="search-form">
                                    <input type="text" placeholder="Search the docs..." name="search"
                                        className="form-control search-input" />
                                    <button type="submit" className="btn search-btn" value="Search"><i
                                        className="fas fa-search"></i></button>
                                </form>
                            </div>

                            <ul className="social-list list-inline mx-md-3 mx-lg-5 mb-0 d-none d-lg-flex">
                                <li className="list-inline-item"><a href="#"><i className="fab fa-github fa-fw"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-twitter fa-fw"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-slack fa-fw"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-product-hunt fa-fw"></i></a></li>
                            </ul>

                            <a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderdocs-free-bootstrap-5-documentation-template-for-software-projects/"
                                className="btn btn-primary d-none d-lg-flex">Download</a>
                        </div>

                    </div>

                </div>

            </header>
        </>
    )
}

export default Header;