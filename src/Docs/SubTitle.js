import React from 'react';
import { useParams } from 'react-router-dom';
import DocumentationData from './Data/DocumentationData';
import Footer from './Footer';

const SubTitle = () => {
    const { sectionId, subtitleId } = useParams();
    const section = DocumentationData.find((section) => section.id === sectionId);
    const subtitle = section?.subtitles.find((subtitle) => subtitle.id === subtitleId);
    console.log("section", section)
    console.log("subsection", subtitle)

    console.log(sectionId, subtitleId, "sectionId    console.log(sectionId, subtitleId    ")

    return (
        <div className="docs-content">
            <div className="container">

                <article className="docs-article">
                    <header className="docs-header">
                        <h1 className="docs-heading">{subtitle?.title}</h1>
                    </header>
                    {/* <div className="docs-content" dangerouslySetInnerHTML={{ __html: subtitle?.content }} /> */}
                    <div className="" > {subtitle?.content } </div>
                </article>

            </div>
                <Footer />
        </div>
    );
}

export default SubTitle;
