import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useRoutesByRole from '../../ApiServices/useRoutesByRole';
import Loader from '../../Components/Loader/Loader';
import { AuthContext } from '../../contexts/AuthProvider';

const SellerRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const [role, isRoleLoading] = useRoutesByRole(user?.email);
	const location = useLocation();

	if (role === 'seller' && user?.uid) {
		return children;
	}

	if (loading || isRoleLoading) {
		return <Loader />;
	}

	return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
