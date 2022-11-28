import React, { useContext } from 'react';
import useRoutesByRole from '../../../ApiServices/useRoutesByRole';
import ComponentLoader from '../../../Components/Loader/ComponentLoader';
import { AuthContext } from '../../../contexts/AuthProvider';

const WelcomePage = () => {
	const { user } = useContext(AuthContext);

	const [role, isRoleLoading] = useRoutesByRole(user?.email);

	if (isRoleLoading) {
		return <ComponentLoader />;
	}
	return (
		<div className=' min-h-screen flex justify-center flex-col items-center text-center'>
			<div className='flex justify-center items-center font-bold h-full'>
				<p className='text-7xl '>Welco</p>

				<p className='text-7xl '>me</p>
			</div>
			<span className=' uppercase my-3 font-bold text-2xl '>{role}</span>
			<h1 className=' text-5xl'>DASHBOARD</h1>
		</div>
	);
};

export default WelcomePage;
