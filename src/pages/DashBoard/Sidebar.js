import React, { useContext, useState } from 'react';
// import {
// 	ArrowRightOnRectangleIcon,
// 	Bars3Icon,
// } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
// import PrimaryButton from '../Button/PrimaryButton';
import { AuthContext } from '../../contexts/AuthProvider';
import AdminMenu from './AdminMenu';
import BuyerMenu from './BuyerMenu';
import SellerMenu from './SellerMenu';
import { FaBars } from 'react-icons/fa';

const Sidebar = ({ role, loading }) => {
	const { user, logout } = useContext(AuthContext);
	const [isActive, setActive] = useState('false');

	// Sidebar Responsive Handler
	const handleToggle = () => {
		setActive(!isActive);
	};
	return (
		<>
			{/* Small Screen Navbar */}
			<div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
				<div>
					<div className='block cursor-pointer p-4 font-bold'>
						<Link to='/'>Bike-Haat</Link>
					</div>
				</div>

				<button
					onClick={handleToggle}
					className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-700'
				>
					{/* <Bars3Icon className='h-5 w-5' /> */}
					<FaBars />
				</button>
			</div>
			{/* Sidebar */}
			<div
				className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
					isActive && '-translate-x-full'
				}  md:translate-x-0  transition duration-200 ease-in-out`}
			>
				<div className='px-2'>
					{/* Branding & Profile Info */}
					<div>
						<h2 className='text-3xl cursor-pointer font-semibold text-center text-gray-800 '>
							<Link to='/'> Bike-Haat</Link>
						</h2>
						<div className='flex flex-col items-center mt-6 -mx-2'>
							<p className=' bg-orange-300 min-w-full p-3 text-center rounded-md'>
								Dashboard
							</p>
						</div>
					</div>

					{/* Nav Items */}
					<div className='flex flex-col justify-between flex-1 mt-6'>
						{/* <nav>
							{role && role !== 'requested' ? (
								<>{role === 'admin' ? <AdminMenu /> : <HostMenu />} </>
							) : (
								<UserMenu />
							)}
						</nav> */}

						{/* <AdminMenu /> */}
						<BuyerMenu />
						{/* <SellerMenu /> */}
					</div>
				</div>

				<div>
					<hr />
					{/* <PrimaryButton
						handler={logout}
						classes='flex block w-full rounded-full items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform'
					> */}
					{/* <ArrowRightOnRectangleIcon className='w-5 h-5' /> */}

					{/* <span className='mx-4 font-medium'>Logout</span> */}
					{/* </PrimaryButton> */}
				</div>
			</div>
		</>
	);
};

export default Sidebar;
