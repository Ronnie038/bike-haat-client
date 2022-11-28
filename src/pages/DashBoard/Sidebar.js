import React, { useContext, useState } from 'react';
// import {
// 	ArrowRightOnRectangleIcon,
// 	Bars3Icon,
// } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
// import PrimaryButton from '../Button/PrimaryButton';
import { AuthContext } from '../../contexts/AuthProvider';

import AdminMenu from './AdminMenu/AdminMenu';
import BuyerMenu from './BuyerMenu/BuyerMenu';
import SellerMenu from './SellerMenu/SellerMenu';
import { FaBars, FaUser } from 'react-icons/fa';
import useRoutesByRole from '../../ApiServices/useRoutesByRole';

const Sidebar = ({ sideActive, setSideActive }) => {
	const { user, logOut } = useContext(AuthContext);
	const [isActive, setActive] = useState(true);
	const [role, isRoleLoading] = useRoutesByRole(user?.email);
	console.log(role);

	// Sidebar Responsive Handler
	const handleToggle = () => {
		setActive(!isActive);
		setSideActive(true);
	};

	return (
		<>
			{/* Small Screen Navbar */}
			<div className=' text-gray-800  flex justify-between   md:hidden'>
				<div>
					<div className='block cursor-pointer text-white p-4 font-bold'>
						<Link to='/'>Bike-Haat</Link>
					</div>
				</div>

				<div className=' flex items-center'>
					<div className='dropdown dropdown-end mt-2  '>
						<label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
							<div className='w-10 rounded-full'>
								{user?.photoURL ? (
									<img src={user?.photoURL} alt='user profile img' />
								) : (
									<FaUser className='text-info mt-3 ml-3' />
								)}
							</div>
						</label>
						<ul
							tabIndex={0}
							className='menu menu-compact bg-white dropdown-content mt-3 p-2 shadow rounded-box w-52'
						>
							<li>
								<Link className='justify-between'>{user?.displayName}</Link>
							</li>
							<li>
								<Link>{user?.email}</Link>
							</li>
							<li>
								<Link onClick={logOut}>Logout</Link>
							</li>
						</ul>
					</div>
					{/* //////////////////////////////////// */}
					<button
						onClick={handleToggle}
						className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-700'
					>
						{/* <Bars3Icon className='h-5 w-5' /> */}
						<FaBars className='text-white' />
					</button>
				</div>
			</div>
			{/* Sidebar */}
			<div
				data-theme='dark'
				className={`z-10  shadow-lg md:fixed flex flex-col justify-between overflow-x-hidden  w-64 space-y-6  py-4 absolute inset-y-0 left-0 transform ${
					(isActive || !sideActive) && '-translate-x-full'
				}  md:translate-x-0  transition duration-200 ease-in-out`}
			>
				<div className=' z-50 px-3'>
					{/* Branding & Profile Info */}
					<div>
						<h2 className='text-3xl cursor-pointer font-semibold text-center text-white '>
							<Link to='/'> Bike-Haat</Link>
						</h2>
						<div className='flex w-full bg-blue-500  flex-col items-center mt-6 '>
							<p className='p-3  font-bold  text-white min-w-full  text-center rounded-md z-50'>
								<Link to='/dashboard'>Dashboard</Link>
							</p>
						</div>
						<hr className='my-5' />
					</div>

					{/* Nav Items */}
					<div className='flex flex-col justify-between flex-1 mt-6 z-50'>
						{role === 'admin' && <AdminMenu />}
						{role === 'seller' && <SellerMenu />}
						{role === 'buyer' && <BuyerMenu />}
						{/* <AdminMenu />
						<SellerMenu />
						<BuyerMenu /> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
