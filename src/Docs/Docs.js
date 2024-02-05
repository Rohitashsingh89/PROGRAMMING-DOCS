import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

const Docs = () => {
    return (
        <>
            <Header />
            <div className="docs-wrapper">
                <Sidebar />
                <Content />
            </div>
            <Footer />
        </>
    )
}

export default Docs;