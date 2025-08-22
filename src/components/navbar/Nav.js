import React, { useState } from 'react';
import { ArrowClockwise } from 'react-bootstrap-icons';
import './nav.css';

const Nav = () => {
	const [Toggle, showNav] = useState(false);
	return (
		<header className='Nav'>
			<nav className='nav container'>
				<a href='index.html' className='nav__logo'>
					<ArrowClockwise className='refresh-arrow' />
				</a>
				<div className={Toggle ? 'nav-content show-menu' : 'nav-content'}>
					<ul className='nav-content-layout grid'>
						<li className='nav-item'>
							<a href='#content' className='nav__link'>
								<i className='uil uil-home nav__icon'></i> Home
							</a>
						</li>

						<li className='nav-item'>
							<a href='#about' className='nav__link'>
								<i className='uil uil-user nav__icon'></i> About
							</a>
						</li>

						<li className='nav-item'>
							<a href='#projects' className='nav__link'>
								<i className='uil uil-scenery nav__icon'></i> Projects
							</a>
						</li>

						<li className='nav-item'>
							<a href='#contact' className='nav__link'>
								<i className='uil uil-message nav__icon'></i> Contact
							</a>
						</li>
					</ul>
				</div>

				<div className='nav__toggle' onClick={() => showNav(!Toggle)}>
					<div className='hamburger'>
						<span className='hamburger-line'></span>
						<span className='hamburger-line'></span>
						<span className='hamburger-line'></span>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
