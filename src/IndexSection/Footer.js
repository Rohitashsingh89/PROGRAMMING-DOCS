import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-bottom text-center py-5">
                    <ul className="social-list list-unstyled pb-4 mb-0">
                        <li className="list-inline-item"><a href="#"><i className="fab fa-github fa-fw"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fab fa-twitter fa-fw"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fab fa-slack fa-fw"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fab fa-product-hunt fa-fw"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f fa-fw"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fab fa-instagram fa-fw"></i></a></li>
                    </ul>

                    <small className="copyright">Designed with <span className="sr-only">love</span><i className="fas fa-heart"
                        style={{color: "#fb866a"}}></i> by <a className="theme-link" href="http://rohitashsingh.vercel.app"
                            target="_blank">Rohitash Singh</a></small>
                </div>
            </footer>
        </>
    )
}

export default Footer;