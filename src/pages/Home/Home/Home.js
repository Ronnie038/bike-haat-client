import React from 'react';
import ComponentLoader from '../../../Components/Loader/ComponentLoader';
import Navbar from '../../shared/Header/Navbar';
import Advertisement from '../Advertisement/Advertisement';
import Category from '../bikesByCategory/Category';
import Hero from '../HeroSection/Hero';

const Home = () => {
	return (
		<div>
			<Hero />

			<Advertisement />
			<Category />
		</div>
	);
};

export default Home;
