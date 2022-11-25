import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import Navbar from '../pages/shared/Header/Navbar';

const Layout = () => {
	return (
		<div className='flex min-h-screen justify-between flex-col  mx-auto max-w-7xl'>
			<div className=''>
				<Navbar />
				<Outlet />
			</div>
			<div className=''>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
