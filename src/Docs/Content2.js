import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import DocumentationData from './Data/DocumentationData';
import Footer from './Footer';

const Section = () => {
    const { sectionId } = useParams();
    const selectedSection = DocumentationData.find((section) => section.id === sectionId);

    return (
        <article className="docs-article" id={sectionId}>
            <header className="docs-header">
                <h1 className="docs-heading">{selectedSection?.title} <span className="docs-time">Last updated: 2019-06-01</span></h1>
                <div dangerouslySetInnerHTML={{ __html: selectedSection ? selectedSection.content : '' }} />
            </header>
        </article>
    );
}

const Content = () => {

    return (
        <>
            <div className="docs-content">
                <div className="container">
                    <Routes>
                        {DocumentationData.map((section) => (
                            <Route key={section.id} path={`/${section.id}`} element={<Section />} />
                        ))}
                    </Routes>
                    <article className="docs-article" id="section-1">
                        <header className="docs-header">
                            <h1 className="docs-heading">Introduction <span className="docs-time">Last updated: 2019-06-01</span>
                            </h1>
                            <section className="docs-intro">
                                <p>Section intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                    finibus condimentum nisl id vulputate. Praesent aliquet varius eros interdum suscipit.
                                    Donec eu purus sed nibh convallis bibendum quis vitae turpis. Duis vestibulum diam
                                    lorem, vitae dapibus nibh facilisis a. Fusce in malesuada odio.</p>
                            </section>


                            <h5>Github Code Example:</h5>
                            <p>You can <a className="theme-link" href="https://gist.github.com/" target="_blank">embed your code
                                snippets using Github gists</a></p>
                            <div className="docs-code-block">

                                <script src="https://gist.github.com/xriley/fce6cf71edfd2dadc7919eb9c98f3f17.js"></script>
                            </div>


                            <h5>Highlight.js Example:</h5>
                            <p>You can <a className="theme-link" href="https://github.com/highlightjs/highlight.js"
                                target="_blank">embed your code snippets using highlight.js</a> It supports <a
                                    className="theme-link" href="https://highlightjs.org/static/demo/" target="_blank">185
                                    languages and 89 styles</a>.</p>
                            <p>This template uses <a className="theme-link" href="https://highlightjs.org/static/demo/"
                                target="_blank">Atom One Dark</a> style for the code blocks:
                                <br /><code>&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.2/styles/atom-one-dark.min.css&#x22;&#x3E;</code>
                            </p>
                            <div className="docs-code-block">
                                {/* <pre className="shadow-lg rounded"><code className="json hljs">[
                                    {
                                        <span className="hljs-attr">"title"</span>: <span className="hljs-string">"apples"</span>,
                                    <span className="hljs-attr">"count"</span>: [<span className="hljs-number">12000</span>, <span className="hljs-number">20000</span>],
                                    <span className="hljs-attr">"description"</span>: {<span className="hljs-attr">"text"</span>: <span className="hljs-string">"..."</span>, <span className="hljs-attr">"sensitive"</span>: <span className="hljs-literal">false</span>}
  },
                                    {
                                        <span className="hljs-attr">"title"</span>: <span className="hljs-string">"oranges"</span>,
                                    <span className="hljs-attr">"count"</span>: [<span className="hljs-number">17500</span>, <span className="hljs-literal">null</span>],
                                    <span className="hljs-attr">"description"</span>: {<span className="hljs-attr">"text"</span>: <span className="hljs-string">"..."</span>, <span className="hljs-attr">"sensitive"</span>: <span className="hljs-literal">false</span>}
  }
                                    ]


                                </code></pre> */}
                            </div>



                        </header>
                        <section className="docs-section" id="item-1-1">
                            <h2 className="section-heading">Section Item 1.1</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. </p>
                            <p>Code Example: <code>npm install &lt;package&gt;</code></p>
                            <h5>Unordered List Examples:</h5>
                            <ul>
                                <li><strong className="me-1">HTML5:</strong> <code>&lt;div id="foo"&gt;</code></li>
                                <li><strong className="me-1">CSS:</strong> <code>#foo
                                    {/* {color: red } */}
                                </code></li>
                                <li><strong className="me-1">JavaScript:</strong>
                                    <code>console.log(&#x27;#foo\bar&#x27;);</code>
                                </li>
                            </ul>
                            <h5>Ordered List Examples:</h5>
                            <ol>
                                <li>Download lorem ipsum dolor sit amet.</li>
                                <li>Click ipsum faucibus venenatis.</li>
                                <li>Configure fermentum malesuada nunc.</li>
                                <li>Deploy donec non ante libero.</li>
                            </ol>
                            <h5>Callout Examples:</h5>
                            <div className="callout-block callout-block-info">

                                <div className="content">
                                    <h4 className="callout-title">
                                        <span className="callout-icon-holder me-1">
                                            <i className="fas fa-info-circle"></i>
                                        </span>

                                        Note
                                    </h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        <code>&lt;code&gt;</code> , Nemo enim ipsam voluptatem quia voluptas <a
                                            href="#">link example</a> sit aspernatur aut odit aut fugit.
                                    </p>
                                </div>

                            </div>


                            <div className="callout-block callout-block-warning">
                                <div className="content">
                                    <h4 className="callout-title">
                                        <span className="callout-icon-holder me-1">
                                            <i className="fas fa-bullhorn"></i>
                                        </span>

                                        Warning
                                    </h4>
                                    <p>Nunc hendrerit odio quis dignissim efficitur. Proin ut finibus libero. Morbi posuere
                                        fringilla felis eget sagittis. Fusce sem orci, cursus in tortor <a href="#">link
                                            example</a> tellus vel diam viverra elementum.</p>
                                </div>

                            </div>


                            <div className="callout-block callout-block-success">
                                <div className="content">
                                    <h4 className="callout-title">
                                        <span className="callout-icon-holder me-1">
                                            <i className="fas fa-thumbs-up"></i>
                                        </span>

                                        Tip
                                    </h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <a href="#">Link
                                        example</a> aenean commodo ligula eget dolor.</p>
                                </div>

                            </div>


                            <div className="callout-block callout-block-danger me-1">
                                <div className="content">
                                    <h4 className="callout-title">
                                        <span className="callout-icon-holder">
                                            <i className="fas fa-exclamation-triangle"></i>
                                        </span>

                                        Danger
                                    </h4>
                                    <p>Morbi eget interdum sapien. Donec sed turpis sed nulla lacinia accumsan vitae ut
                                        tellus. Aenean vestibulum <a href="#">Link example</a> maximus ipsum vel dignissim.
                                        Morbi ornare elit sit amet massa feugiat, viverra dictum ipsum pellentesque. </p>
                                </div>

                            </div>


                            <h5 className="mt-5">Alert Examples:</h5>
                            <div className="alert alert-primary" role="alert">
                                This is a primary alert—check it out!
                            </div>
                            <div className="alert alert-secondary" role="alert">
                                This is a secondary alert—check it out!
                            </div>
                            <div className="alert alert-success" role="alert">
                                This is a success alert—check it out!
                            </div>
                            <div className="alert alert-danger" role="alert">
                                This is a danger alert—check it out!
                            </div>
                            <div className="alert alert-warning" role="alert">
                                This is a warning alert—check it out!
                            </div>
                            <div className="alert alert-info" role="alert">
                                This is a info alert—check it out!
                            </div>
                            <div className="alert alert-light" role="alert">
                                This is a light alert—check it out!
                            </div>
                            <div className="alert alert-dark" role="alert">
                                This is a dark alert—check it out!
                            </div>


                        </section>


                        <section className="docs-section" id="item-1-2">
                            <h2 className="section-heading">Section Item 1.2</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>
                            <h5 className="mt-5">Lightbox Example:</h5>

                            <p>The example below uses the <i className="fas fa-external-link-alt"></i> <a className="theme-link"
                                href="https://github.com/andreknieriem/simplelightbox" target="_blank">simplelightbox
                                plugin</a>. </p>

                            <div className="simplelightbox-gallery row mb-3">
                                <div className="col-12 col-md-4 mb-3">
                                    <a href="assets/images/coderpro-home.png"><img
                                        className="figure-img img-fluid shadow rounded"
                                        src="assets/images/coderpro-home-thumb.png" alt=""
                                        title="CoderPro Home Page" /></a>
                                </div>
                                <div className="col-12 col-md-4 mb-3">
                                    <a href="assets/images/coderpro-features.png"><img
                                        className="figure-img img-fluid shadow rounded"
                                        src="assets/images/coderpro-features-thumb.png" alt=""
                                        title="CoderPro Features Page" /></a>
                                </div>

                                <div className="col-12 col-md-4 mb-3">
                                    <a href="assets/images/coderpro-pricing.png"><img
                                        className="figure-img img-fluid shadow rounded"
                                        src="assets/images/coderpro-pricing-thumb.png" alt=""
                                        title="CoderPro Pricing Page" /></a>
                                </div>


                            </div>


                            <h5>Custom Table:</h5>
                            <div className="table-responsive my-4">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th className="theme-bg-light"><a className="theme-link" href="#">Option 1</a></th>
                                            <td>Option 1 desc lorem ipsum dolor sit amet, consectetur adipiscing elit. </td>
                                        </tr>
                                        <tr>
                                            <th className="theme-bg-light"><a className="theme-link" href="#">Option 2</a></th>
                                            <td>Option 2 desc lorem ipsum dolor sit amet, consectetur adipiscing elit. </td>
                                        </tr>

                                        <tr>
                                            <th className="theme-bg-light"><a className="theme-link" href="#">Option 3</a></th>
                                            <td>Option 3 desc lorem ipsum dolor sit amet, consectetur adipiscing elit. </td>
                                        </tr>

                                        <tr>
                                            <th className="theme-bg-light"><a className="theme-link" href="#">Option 4</a></th>
                                            <td>Option 4 desc lorem ipsum dolor sit amet, consectetur adipiscing elit. </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h5>Stripped Table:</h5>
                            <div className="table-responsive my-4">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h5>Bordered Dark Table:</h5>
                            <div className="table-responsive my-4">
                                <table className="table table-bordered table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>



                        </section>


                        <section className="docs-section" id="item-1-3">
                            <h2 className="section-heading">Section Item 1.3</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>
                            <h5>Badges Examples:</h5>
                            <div className="my-4">
                                <span className="badge badge-primary">Primary</span>
                                <span className="badge badge-secondary">Secondary</span>
                                <span className="badge badge-success">Success</span>
                                <span className="badge badge-danger">Danger</span>
                                <span className="badge badge-warning">Warning</span>
                                <span className="badge badge-info">Info</span>
                                <span className="badge badge-light">Light</span>
                                <span className="badge badge-dark">Dark</span>
                            </div>
                            <h5>Button Examples:</h5>
                            <div className="row my-3">
                                <div className="col-md-6 col-12">
                                    <ul className="list list-unstyled pl-0">
                                        <li><a href="#" className="btn btn-primary">Primary Button</a></li>
                                        <li><a href="#" className="btn btn-secondary">Secondary Button</a></li>
                                        <li><a href="#" className="btn btn-light">Light Button</a></li>
                                        <li><a href="#" className="btn btn-success">Succcess Button</a></li>
                                        <li><a href="#" className="btn btn-info">Info Button</a></li>
                                        <li><a href="#" className="btn btn-warning">Warning Button</a></li>
                                        <li><a href="#" className="btn btn-danger">Danger Button</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6 col-12">
                                    <ul className="list list-unstyled pl-0">
                                        <li><a href="#" className="btn btn-primary"><i className="fas fa-download me-2"></i>
                                            Download Now</a></li>
                                        <li><a href="#" className="btn btn-secondary"><i className="fas fa-book me-2"></i> View
                                            Docs</a></li>
                                        <li><a href="#" className="btn btn-light"><i
                                            className="fas fa-arrow-alt-circle-right me-2"></i> View Features</a></li>
                                        <li><a href="#" className="btn btn-success"><i className="fas fa-code-branch me-2"></i> Fork
                                            Now</a></li>
                                        <li><a href="#" className="btn btn-info"><i className="fas fa-play-circle me-2"></i> Find
                                            Out Now</a></li>
                                        <li><a href="#" className="btn btn-warning"><i className="fas fa-bug me-2"></i> Report
                                            Bugs</a></li>
                                        <li><a href="#" className="btn btn-danger"><i
                                            className="fas fa-exclamation-circle me-2"></i> Submit Issues</a></li>
                                    </ul>
                                </div>
                            </div>


                            <h5>Progress Examples:</h5>
                            <div className="my-4">
                                <div className="progress my-4">
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }}
                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="progress my-4">
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: "50%" }}
                                        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="progress my-4">
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "75%" }}
                                        aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="progress my-4">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: "100%" }}
                                        aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </section>


                        <section className="docs-section" id="item-1-4">
                            <h2 className="section-heading">Section Item 1.4</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>


                            <h5>Pagination Example:</h5>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination pl-0">
                                    <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>

                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>

                        </section>

                        <section className="docs-section" id="item-1-5">
                            <h2 className="section-heading">Section Item 1.5</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>
                        </section>

                        <section className="docs-section" id="item-1-6">
                            <h2 className="section-heading">Section Item 1.6</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>
                        </section>


                    </article>

                    <article className="docs-article" id="section-2">
                        <header className="docs-header">
                            <h1 className="docs-heading">Installation</h1>
                            <section className="docs-intro">
                                <p>Section intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                    finibus condimentum nisl id vulputate. Praesent aliquet varius eros interdum suscipit.
                                    Donec eu purus sed nibh convallis bibendum quis vitae turpis. Duis vestibulum diam
                                    lorem, vitae dapibus nibh facilisis a. Fusce in malesuada odio.</p>
                            </section>

                        </header>
                        <section className="docs-section" id="item-2-1">
                            <h2 className="section-heading">Section Item 2.1</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>
                        </section>


                        <section className="docs-section" id="item-2-2">
                            <h2 className="section-heading">Section Item 2.2</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>
                        </section>


                        <section className="docs-section" id="item-2-3">
                            <h2 className="section-heading">Section Item 2.3</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>
                        </section>

                    </article>



                    <article className="docs-article" id="section-3">
                        <header className="docs-header">
                            <h1 className="docs-heading">APIs</h1>
                            <section className="docs-intro">
                                <p>Section intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                    finibus condimentum nisl id vulputate. Praesent aliquet varius eros interdum suscipit.
                                    Donec eu purus sed nibh convallis bibendum quis vitae turpis. Duis vestibulum diam
                                    lorem, vitae dapibus nibh facilisis a. Fusce in malesuada odio.</p>
                            </section>

                        </header>
                        <section className="docs-section" id="item-3-1">
                            <h2 className="section-heading">Section Item 3.1</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>
                        </section>


                        <section className="docs-section" id="item-3-2">
                            <h2 className="section-heading">Section Item 3.2</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>
                        </section>


                        <section className="docs-section" id="item-3-3">
                            <h2 className="section-heading">Section Item 3.3</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>
                        </section>

                    </article>


                    <article className="docs-article" id="section-4">
                        <header className="docs-header">
                            <h1 className="docs-heading">Intergrations</h1>
                            <section className="docs-intro">
                                <p>Section intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                    finibus condimentum nisl id vulputate. Praesent aliquet varius eros interdum suscipit.
                                    Donec eu purus sed nibh convallis bibendum quis vitae turpis. Duis vestibulum diam
                                    lorem, vitae dapibus nibh facilisis a. Fusce in malesuada odio.</p>
                            </section>

                        </header>
                        <section className="docs-section" id="item-4-1">
                            <h2 className="section-heading">Section Item 4.1</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>
                        </section>


                        <section className="docs-section" id="item-4-2">
                            <h2 className="section-heading">Section Item 4.2</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>
                        </section>


                        <section className="docs-section" id="item-4-3">
                            <h2 className="section-heading">Section Item 4.3</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>
                        </section>

                    </article>


                    <article className="docs-article" id="section-5">
                        <header className="docs-header">
                            <h1 className="docs-heading">Utilities</h1>
                            <section className="docs-intro">
                                <p>Section intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                    finibus condimentum nisl id vulputate. Praesent aliquet varius eros interdum suscipit.
                                    Donec eu purus sed nibh convallis bibendum quis vitae turpis. Duis vestibulum diam
                                    lorem, vitae dapibus nibh facilisis a. Fusce in malesuada odio.</p>
                            </section>

                        </header>
                        <section className="docs-section" id="item-5-1">
                            <h2 className="section-heading">Section Item 5.1</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>
                        </section>


                        <section className="docs-section" id="item-5-2">
                            <h2 className="section-heading">Section Item 5.2</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>
                        </section>


                        <section className="docs-section" id="item-5-3">
                            <h2 className="section-heading">Section Item 5.3</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>
                        </section>

                    </article>



                    <article className="docs-article" id="section-6">
                        <header className="docs-header">
                            <h1 className="docs-heading">Web</h1>
                            <section className="docs-intro">
                                <p>Section intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                    finibus condimentum nisl id vulputate. Praesent aliquet varius eros interdum suscipit.
                                    Donec eu purus sed nibh convallis bibendum quis vitae turpis. Duis vestibulum diam
                                    lorem, vitae dapibus nibh facilisis a. Fusce in malesuada odio.</p>
                            </section>

                        </header>
                        <section className="docs-section" id="item-6-1">
                            <h2 className="section-heading">Section Item 6.1</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>
                        </section>


                        <section className="docs-section" id="item-6-2">
                            <h2 className="section-heading">Section Item 6.2</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>
                        </section>


                        <section className="docs-section" id="item-6-3">
                            <h2 className="section-heading">Section Item 6.3</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>
                        </section>

                    </article>



                    <article className="docs-article" id="section-7">
                        <header className="docs-header">
                            <h1 className="docs-heading">Mobile</h1>
                            <section className="docs-intro">
                                <p>Section intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                    finibus condimentum nisl id vulputate. Praesent aliquet varius eros interdum suscipit.
                                    Donec eu purus sed nibh convallis bibendum quis vitae turpis. Duis vestibulum diam
                                    lorem, vitae dapibus nibh facilisis a. Fusce in malesuada odio.</p>
                            </section>

                        </header>
                        <section className="docs-section" id="item-7-1">
                            <h2 className="section-heading">Section Item 7.1</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>
                        </section>


                        <section className="docs-section" id="item-7-2">
                            <h2 className="section-heading">Section Item 7.2</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>
                        </section>


                        <section className="docs-section" id="item-7-3">
                            <h2 className="section-heading">Section Item 7.3</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>
                        </section>

                    </article>



                    <article className="docs-article" id="section-8">
                        <header className="docs-header">
                            <h1 className="docs-heading">Resources</h1>
                            <section className="docs-intro">
                                <p>Section intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                    finibus condimentum nisl id vulputate. Praesent aliquet varius eros interdum suscipit.
                                    Donec eu purus sed nibh convallis bibendum quis vitae turpis. Duis vestibulum diam
                                    lorem, vitae dapibus nibh facilisis a. Fusce in malesuada odio.</p>
                            </section>

                        </header>
                        <section className="docs-section" id="item-8-1">
                            <h2 className="section-heading">Section Item 8.1</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>
                        </section>


                        <section className="docs-section" id="item-8-2">
                            <h2 className="section-heading">Section Item 8.2</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>
                        </section>


                        <section className="docs-section" id="item-8-3">
                            <h2 className="section-heading">Section Item 8.3</h2>
                            <p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum mauris, vitae facilisis
                                leo. Aliquam sagittis purus nisi, at commodo augue convallis id. Sed interdum turpis quis
                                felis bibendum imperdiet. Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio
                                in felis ultricies porttitor. Donec at purus libero. Vestibulum libero orci, commodo nec
                                arcu sit amet, commodo sollicitudin est. Vestibulum ultricies malesuada tempor.</p>
                        </section>

                    </article>



                    <article className="docs-article" id="section-9">
                        <header className="docs-header">
                            <h1 className="docs-heading">FAQs</h1>
                            <section className="docs-intro">
                                <p>Section intro goes here. You can list all your FAQs using the format below.</p>
                            </section>

                        </header>
                        <section className="docs-section" id="item-9-1">
                            <h2 className="section-heading">Section Item 9.1 <small>(FAQ Category One)</small></h2>
                            <h5 className="pt-3"><i className="fas fa-question-circle me-1"></i>What's sit amet quam eget lacinia?
                            </h5>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                                consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                                arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
                                pede mollis pretium.</p>
                            <h5 className="pt-3"><i className="fas fa-question-circle me-1"></i>How to ipsum dolor sit amet quam
                                tortor?</h5>
                            <p>Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus
                                nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus
                                quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. </p>
                            <h5 className="pt-3"><i className="fas fa-question-circle me-1"></i>Can I bibendum sodales?</h5>
                            <p>Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy
                                id, metus. Nullam accumsan lorem in dui. </p>
                            <h5 className="pt-3"><i className="fas fa-question-circle me-1"></i>Where arcu sed urna gravida?</h5>
                            <p>Aenean et sodales nisi, vel efficitur sapien. Quisque molestie diam libero, et elementum diam
                                mollis ac. In dignissim aliquam est eget ullamcorper. Sed id sodales tortor, eu finibus leo.
                                Vivamus dapibus sollicitudin justo vel fermentum. Curabitur nec arcu sed urna gravida
                                lobortis. Donec lectus est, imperdiet eu viverra viverra, ultricies nec urna. </p>
                        </section>


                        <section className="docs-section" id="item-9-2">
                            <h2 className="section-heading">Section Item 9.2 <small>(FAQ Category Two)</small></h2>
                            <h5 className="pt-3"><i className="fas fa-question-circle me-1"></i>What's sit amet quam eget lacinia?
                            </h5>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                                consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                                arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
                                pede mollis pretium.</p>
                            <h5 className="pt-3"><i className="fas fa-question-circle me-1"></i>How to ipsum dolor sit amet quam
                                tortor?</h5>
                            <p>Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus
                                nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus
                                quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. </p>
                            <h5 className="pt-3"><i className="fas fa-question-circle me-1"></i>Can I bibendum sodales?</h5>
                            <p>Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy
                                id, metus. Nullam accumsan lorem in dui. </p>
                            <h5 className="pt-3"><i className="fas fa-question-circle me-1"></i>Where arcu sed urna gravida?</h5>
                            <p>Aenean et sodales nisi, vel efficitur sapien. Quisque molestie diam libero, et elementum diam
                                mollis ac. In dignissim aliquam est eget ullamcorper. Sed id sodales tortor, eu finibus leo.
                                Vivamus dapibus sollicitudin justo vel fermentum. Curabitur nec arcu sed urna gravida
                                lobortis. Donec lectus est, imperdiet eu viverra viverra, ultricies nec urna. </p>
                        </section>


                        <section className="docs-section" id="item-9-3">
                            <h2 className="section-heading">Section Item 9.3 <small>(FAQ Category Three)</small></h2>
                            <h5 className="pt-3"><i className="fas fa-question-circle me-1"></i>How to dapibus sollicitudin justo
                                vel fermentum?</h5>
                            <p>Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus
                                nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus
                                quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. </p>
                            <h5 className="pt-3"><i className="fas fa-question-circle me-1"></i>How long bibendum sodales?</h5>
                            <p>Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy
                                id, metus. Nullam accumsan lorem in dui. </p>
                            <h5 className="pt-3"><i className="fas fa-question-circle me-1"></i>Where dapibus sollicitudin?</h5>
                            <p>Aenean et sodales nisi, vel efficitur sapien. Quisque molestie diam libero, et elementum diam
                                mollis ac. In dignissim aliquam est eget ullamcorper. Sed id sodales tortor, eu finibus leo.
                                Vivamus dapibus sollicitudin justo vel fermentum. Curabitur nec arcu sed urna gravida
                                lobortis. Donec lectus est, imperdiet eu viverra viverra, ultricies nec urna. </p>
                        </section>

                    </article>


                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Content;