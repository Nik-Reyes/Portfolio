import React from 'react';
import './footer.css';
import { Github, Linkedin, Camera2, CCircle, Dot } from 'react-bootstrap-icons';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer-container container'>
				<h1 className='footer-title'>Nik Reyes</h1>

				<div className='footer-links'>
					<ul className='footer-list'>
						<li>
							<a href='#content' className='footer-link'>
								Home
							</a>
						</li>
						<li>
							<a href='#about' className='footer-link'>
								About
							</a>
						</li>
					</ul>
					<Dot className='Dot' />
					<div className='footer-social'>
						<a href='https://github.com/Nik-Reyes' className='social-button' target='_blank'>
							<Github />
						</a>

						<a href='https://www.linkedin.com/in/nikolas-reyes/' className='social-button' target='_blank'>
							<Linkedin />
						</a>

						<a href='https://www.flickr.com/people/184336516@N02/' className='social-button' target='_blank'>
							<Camera2 />
						</a>
					</div>
				</div>

				<span className='footer-copy'>
					<CCircle />
					NikReyes. All rights reserved
				</span>
			</div>
		</footer>
	);
};

export default Footer;
