import React from 'react';
import { Link } from 'react-router-dom';
import DocumentationData from './Data/DocumentationData';

const Sidebar = () => {
    return (
        <>
            <div id="docs-sidebar" className="docs-sidebar">
                <div className="top-search-box p-3">
                    <form className="search-form">
                        <input type="text" placeholder="Search the docs..." name="search" className="form-control search-input" />
                        <button type="submit" className="btn search-btn" value="Search"><i className="fas fa-search"></i></button>
                    </form>
                </div>
                <nav id="docs-nav" className="docs-nav navbar">
                    <ul className="section-items list-unstyled nav flex-column pb-3">
                        {/* {DocumentationData.map((section) => (
                            <li key={section.id} className="nav-item section-title">
                                <Link className="nav-link" to={`/${section.id}`}>
                                    <span className="theme-icon-holder me-2"><i className="fas fa-map-signs"></i></span>
                                    {section.title}
                                </Link>
                            </li>
                        ))} */}
                        <li className="nav-item section-title"><a className="nav-link scrollto active" href="#section-1"><span
                            className="theme-icon-holder me-2"><i className="fas fa-map-signs"></i></span>Introduction</a>
                        </li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-1-1">Section Item 1.1</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-1-2">Section Item 1.2</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-1-3">Section Item 1.3</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-1-4">Section Item 1.4</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-1-5">Section Item 1.5</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-1-6">Section Item 1.6</a></li>
                        <li className="nav-item section-title mt-3"><a className="nav-link scrollto" href="#section-2"><span
                            className="theme-icon-holder me-2"><i className="fas fa-arrow-down"></i></span>Installation</a>
                        </li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-2-1">Section Item 2.1</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-2-2">Section Item 2.2</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-2-3">Section Item 2.3</a></li>
                        <li className="nav-item section-title mt-3"><a className="nav-link scrollto" href="#section-3"><span
                            className="theme-icon-holder me-2"><i className="fas fa-box"></i></span>APIs</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-3-1">Section Item 3.1</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-3-2">Section Item 3.2</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-3-3">Section Item 3.3</a></li>
                        <li className="nav-item section-title mt-3"><a className="nav-link scrollto" href="#section-4"><span
                            className="theme-icon-holder me-2"><i className="fas fa-cogs"></i></span>Integrations</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-4-1">Section Item 4.1</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-4-2">Section Item 4.2</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-4-3">Section Item 4.3</a></li>
                        <li className="nav-item section-title mt-3"><a className="nav-link scrollto" href="#section-5"><span
                            className="theme-icon-holder me-2"><i className="fas fa-tools"></i></span>Utilities</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-5-1">Section Item 5.1</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-5-2">Section Item 5.2</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-5-3">Section Item 5.3</a></li>
                        <li className="nav-item section-title mt-3"><a className="nav-link scrollto" href="#section-6"><span
                            className="theme-icon-holder me-2"><i className="fas fa-laptop-code"></i></span>Web</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-6-1">Section Item 6.1</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-6-2">Section Item 6.2</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-6-3">Section Item 6.3</a></li>
                        <li className="nav-item section-title mt-3"><a className="nav-link scrollto" href="#section-7"><span
                            className="theme-icon-holder me-2"><i className="fas fa-tablet-alt"></i></span>Mobile</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-7-1">Section Item 7.1</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-7-2">Section Item 7.2</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-7-3">Section Item 7.3</a></li>
                        <li className="nav-item section-title mt-3"><a className="nav-link scrollto" href="#section-8"><span
                            className="theme-icon-holder me-2"><i className="fas fa-book-reader"></i></span>Resources</a>
                        </li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-8-1">Section Item 8.1</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-8-2">Section Item 8.2</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-8-3">Section Item 8.3</a></li>
                        <li className="nav-item section-title mt-3"><a className="nav-link scrollto" href="#section-9"><span
                            className="theme-icon-holder me-2"><i className="fas fa-lightbulb"></i></span>FAQs</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-9-1">Section Item 9.1</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-9-2">Section Item 9.2</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#item-9-3">Section Item 9.3</a></li>
                    </ul>

                </nav>
            </div>
        </>
    )
}

export default Sidebar;