import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DocumentationData from './Data/DocumentationData';

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [expandedSections, setExpandedSections] = useState({});
    const [subTitleContent, setSubTitleContent] = useState({});

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const sections = document.querySelectorAll('.docs-article');

            sections.forEach(section => {
                const sectionId = section.getAttribute('id');
                const sectionOffsetTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (scrollPosition >= sectionOffsetTop && scrollPosition < sectionOffsetTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleSubTitles = (sectionId) => {
        setExpandedSections(prevState => {
            const updatedState = { ...prevState };

            // Close all other expanded subtitles
            Object.keys(updatedState).forEach(id => {
                if (id !== sectionId) {
                    updatedState[id] = false;
                }
            });

            // Toggle the current subtitle
            updatedState[sectionId] = !prevState[sectionId];
            return updatedState;
        });
    };

    const handleSubTitleClick = (sectionId, subtitleId, content) => {
        setSubTitleContent({ ...subTitleContent, [subtitleId]: content });
    };

    return (
        <>
            <div id="docs-sidebar" className="docs-sidebar">
                {/* <div className="top-search-box p-3">
                    <form className="search-form">
                        <input type="text" placeholder="Search the docs..." name="search" className="form-control search-input" />
                        <button type="submit" className="btn search-btn" value="Search"><i className="fas fa-search"></i></button>
                    </form>
                </div> */}
                <nav id="docs-nav" className="docs-nav navbar">
                    <ul className="section-items list-unstyled nav w-100 flex-column pb-3">

                        {DocumentationData.map((section) => (
                            <li key={section.id} className="nav-item section-title">
                                <Link className="nav-link scrollto w-100" onClick={() => toggleSubTitles(section.id)} key={section.id} to={`/docs/${section.id}`}>
                                    <div className='d-flex justify-content-between'>
                                        <span>
                                            {/* <span className="theme-icon-holder me-2"><i className="fas fa-map-signs"></i></span> */}
                                            {section.title}
                                        </span>
                                        <span>
                                            <i className={`fas fa-chevron-${expandedSections[section.id] ? 'down' : 'right'}`}></i>
                                        </span>
                                    </div>
                                </Link>
                                {expandedSections[section.id] && (
                                    <ul className='section-items list-unstyled nav w-100 flex-column mx-1 mt-3'>
                                        {section.subtitles.map((subtitle, index) => (
                                            <li key={index} className="">
                                                <Link className='text-decoration-none' to={`/docs/${section.id}/${subtitle.id}`}>
                                                    <span className='d-block bg-white mb-2'>{subtitle.title}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                </nav>
            </div>
        </>
    )
}

export default Sidebar;