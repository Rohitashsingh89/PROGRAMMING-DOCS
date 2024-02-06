import React from 'react';
import { useParams } from 'react-router-dom';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import SubTitle from './SubTitle';

const Docs = () => {
    const { sectionId, subtitleId } = useParams();
    console.log(sectionId, subtitleId, "sectionId")

    // Check if both sectionId and subtitleId are present
    const isSubTitle = sectionId && subtitleId;


    return (
        <>
            <Header />
            <div className="docs-wrapper">
                <Sidebar />
                {isSubTitle ? (
                    <SubTitle />
                ) : (
                    <Content />
                )}
            </div>
        </>
    )
}

export default Docs;