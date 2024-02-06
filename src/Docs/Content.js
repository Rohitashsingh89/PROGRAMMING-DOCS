import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import DocumentationData from './Data/DocumentationData';
import Footer from './Footer';

const Section = ({ selectedSection }) => {
    return (
        <article className="docs-article" id={selectedSection.id}>
            <header className="docs-header">
                <h1 className="docs-heading">{selectedSection?.title} <span className="docs-time">Last updated: 2019-06-01</span></h1>
                <div dangerouslySetInnerHTML={{ __html: selectedSection ? selectedSection.content : '' }} />
            </header>
        </article>
    );
}

const Content = () => {
    const { sectionId } = useParams();
    const selectedSection = DocumentationData.find((section) => section.id === sectionId);
    console.log(sectionId)
    console.log(selectedSection)
    return (
        <>
            <div className="docs-content pb-1">
                <div className="container">
                <Section selectedSection={selectedSection} />

                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Content;