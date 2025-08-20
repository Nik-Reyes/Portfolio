import React from 'react';
import { Mouse, ArrowDownShort } from 'react-bootstrap-icons';

const Scroll = () => {
	return (
		<a href='#contact' className='content-scroll-about button--flex'>
			<Mouse />
			<span className='scroll-description'>Scroll Down</span>
			<ArrowDownShort size={20} />
		</a>
	);
};

export default Scroll;
