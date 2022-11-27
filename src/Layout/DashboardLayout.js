import React, { useContext, useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Sidebar from '../pages/DashBoard/Sidebar';
import Navbar from '../pages/shared/Header/Navbar';

const DashboardLayout = () => {
	const { user, logOut } = useContext(AuthContext);
	const [role, setRole] = useState(null);

	const [sideActive, setSideActive] = useState(true);

	const handleActive = () => {
		setSideActive(false);
		console.log('hello');
	};
	console.log(user);
	return (
		<div className='relative mx-auto min-h-screen md:flex max-w-7xl'>
			{/* {loading ? (
				''
			) : ( */}
			<>
				<Sidebar
					role={role}
					sideActive={sideActive}
					setSideActive={setSideActive}
				/>
				<div className='flex-1  md:ml-64'>
					<div className='shadow-slate-300 hidden md:flex justify-end items-center border-b '>
						<button onClick={logOut} className='mr-5 btn btn-xs'>
							Logout
						</button>
						<p>{user?.email}</p>

						<div className='dropdown dropdown-end mr-2 mt-4 '>
							<label
								tabIndex={0}
								className='btn btn-ghost btn-circle avatar'
								title={user?.displayName}
							>
								<div className='w-10 rounded-full text-center'>
									{user?.photoURL ? (
										<img src={user?.photURL} alt='userProfile' />
									) : (
										<FaUser className='mt-2 ml-3 text-info' />
									)}
								</div>
							</label>
						</div>
					</div>
					<div className='p-5 min-h-screen' onClick={handleActive}>
						<Outlet />
					</div>
				</div>
			</>
			{/* )} */}
		</div>
	);
};

export default DashboardLayout;
