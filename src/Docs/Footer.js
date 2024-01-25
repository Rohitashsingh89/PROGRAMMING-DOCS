import React from 'react';

const Footer = () => {
  return (
    <>
        <footer class="footer">
					<div class="container text-center py-5">
						<small class="copyright">Designed with <span class="sr-only">love</span><i class="fas fa-heart"
								style={{color: "#fb866a"}}></i> by <a class="theme-link"
								href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for
							developers</small>
						<ul class="social-list list-unstyled pt-4 mb-0">
							<li class="list-inline-item"><a href="#"><i class="fab fa-github fa-fw"></i></a></li>
							<li class="list-inline-item"><a href="#"><i class="fab fa-twitter fa-fw"></i></a></li>
							<li class="list-inline-item"><a href="#"><i class="fab fa-slack fa-fw"></i></a></li>
							<li class="list-inline-item"><a href="#"><i class="fab fa-product-hunt fa-fw"></i></a></li>
							<li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f fa-fw"></i></a></li>
							<li class="list-inline-item"><a href="#"><i class="fab fa-instagram fa-fw"></i></a></li>
						</ul>

					</div>
				</footer>
    </>
  )
}

export default Footer;