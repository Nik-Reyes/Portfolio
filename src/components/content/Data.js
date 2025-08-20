import React from 'react';

const Data = () => {
	return (
		<div className='content-data'>
			<h1 className='content-title'>
				Nik Reyes
				{/* hand svg goes here */}
			</h1>
			<h3 className='content-subtitle'>CSUF Student</h3>
			<p className='content-description'>
				I am a student attending California State University, Fullerton interested in web development and ios
				development
			</p>
			<a href='#contact' className='button button--flex'>
				<span>Message me!</span>
				<span>
					<i className='uil uil-message' id='message-icon'></i>
				</span>
			</a>
		</div>
	);
};

export default Data;
