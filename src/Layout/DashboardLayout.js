import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Sidebar from '../pages/DashBoard/Sidebar';
import Navbar from '../pages/shared/Header/Navbar';

const DashboardLayout = () => {
	const { user } = useContext(AuthContext);
	const [role, setRole] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(true);
		//   getRole(user?.email).then(data => {
		//     setRole(data)
		//     setLoading(false)
		//   })
	}, [user]);
	return (
		<div className='relative mx-auto min-h-screen md:flex max-w-7xl'>
			{/* {loading ? (
				''
			) : ( */}
			<>
				<Sidebar role={role} />
				<div className='flex-1  md:ml-64'>
					<div className='p-5'>
						<Outlet />
					</div>
				</div>
			</>
			{/* )} */}
		</div>
	);
};

export default DashboardLayout;
