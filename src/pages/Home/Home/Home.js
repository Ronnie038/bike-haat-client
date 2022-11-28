import React from 'react';
import ComponentLoader from '../../../Components/Loader/ComponentLoader';
import Navbar from '../../shared/Header/Navbar';
import Advertisement from '../Advertisement/Advertisement';
import Category from '../bikesByCategory/Category';
import Hero from '../HeroSection/Hero';
import UXReviews from '../UXReviews/UXReviews';

const Home = () => {
	return (
		<div>
			<Hero />

			<Advertisement />
			<Category />
			<UXReviews />
		</div>
	);
};

export default Home;
