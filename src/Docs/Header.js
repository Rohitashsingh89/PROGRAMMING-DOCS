import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/images/coderdocs-logo.svg'

const Header = () => {

    useEffect(() => {
        // Your existing JavaScript code here

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

        window.onload = function () {
            responsiveSidebar();
        };

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
            window.onload = null;
            window.onresize = null;
            sidebarToggler.removeEventListener('click', handleSidebarToggle);
            // Cleanup other event listeners if needed
        };
    }, []);

    return (
        <>
            <header class="header fixed-top">
                <div class="branding docs-branding">
                    <div class="container-fluid position-relative py-2">
                        <div class="docs-logo-wrapper">
                            <button id="docs-sidebar-toggler" class="docs-sidebar-toggler docs-sidebar-visible me-2 d-xl-none"
                                type="button">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div class="site-logo"><a class="navbar-brand" href="index.html"><img class="logo-icon me-2"
                                src={logo} alt="logo" /><span class="logo-text">Coder<span
                                    class="text-alt">Docs</span></span></a></div>
                        </div>
                        <div className='docs-logo-wrapper'>
                            <Link to="/docs">Docs</Link>
                        </div>
                        <div class="docs-top-utilities d-flex justify-content-end align-items-center">
                            <div class="top-search-box d-none d-lg-flex">
                                <form class="search-form">
                                    <input type="text" placeholder="Search the docs..." name="search"
                                        class="form-control search-input" />
                                    <button type="submit" class="btn search-btn" value="Search"><i
                                        class="fas fa-search"></i></button>
                                </form>
                            </div>

                            <ul class="social-list list-inline mx-md-3 mx-lg-5 mb-0 d-none d-lg-flex">
                                <li class="list-inline-item"><a href="#"><i class="fab fa-github fa-fw"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab fa-twitter fa-fw"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab fa-slack fa-fw"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab fa-product-hunt fa-fw"></i></a></li>
                            </ul>

                            <a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderdocs-free-bootstrap-5-documentation-template-for-software-projects/"
                                class="btn btn-primary d-none d-lg-flex">Download</a>
                        </div>

                    </div>

                </div>

            </header>
        </>
    )
}

export default Header;