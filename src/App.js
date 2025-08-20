import React from 'react';
import './App.css';
import Nav from './components/navbar/Nav';
import Contact from './components/contact/Contact';
import Content from './components/content/Content';
import About from './components/about/About';
import Footer from './components/footer/Footer';

const App = () => {
	return (
		<>
			<Nav />

			<main className='main'>
				<Content />

				<About />

				<Contact />

				<Footer />
			</main>
		</>
	);
};

export default App;
