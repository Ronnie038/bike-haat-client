import React from 'react';

const Hero = () => {
	return (
		<div className='hero h-[400px] shadow-xl  bg-base-200 hero_img '>
			<div className='hero-content text-center'>
				<div className='max-w-md'>
					<h1 className='text-5xl font-bold text-white'>Hello there</h1>
					<p className='py-6'>Welcome to bike-haat</p>
					<button className='btn btn-primary btn-xs'>Get Started</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
