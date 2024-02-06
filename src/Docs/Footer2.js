import React from 'react';

const Footer = () => {
  return (
    <>
        <footer className="foote">
					<div className="container text-center">
						<small className="copyright">Designed with <span className="sr-only">love</span><i className="fas fa-heart"
								style={{color: "#fb866a"}}></i> by <a className="theme-link"
								href="http://rohitashsingh.vercel.app"
                            target="_blank">Rohitash Singh</a></small>
							
						<ul className="social-list list-unstyled pt-4 mb-0">
							<li className="list-inline-item"><a href="#"><i className="fab fa-github fa-fw"></i></a></li>
							<li className="list-inline-item"><a href="#"><i className="fab fa-twitter fa-fw"></i></a></li>
							<li className="list-inline-item"><a href="#"><i className="fab fa-slack fa-fw"></i></a></li>
							<li className="list-inline-item"><a href="#"><i className="fab fa-product-hunt fa-fw"></i></a></li>
							<li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f fa-fw"></i></a></li>
							<li className="list-inline-item"><a href="#"><i className="fab fa-instagram fa-fw"></i></a></li>
						</ul>

					</div>
				</footer>
    </>
  )
}

export default Footer;