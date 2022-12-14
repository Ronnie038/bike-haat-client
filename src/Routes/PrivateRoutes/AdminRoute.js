import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useRoutesByRole from '../../ApiServices/useRoutesByRole';
import ComponentLoader from '../../Components/Loader/ComponentLoader';
import Loader from '../../Components/Loader/Loader';
import { AuthContext } from '../../contexts/AuthProvider';

const AdminRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const [role, isRoleLoading] = useRoutesByRole(user?.email);
	const location = useLocation();

	if (role === 'admin' && user?.uid) {
		return children;
	}

	if (loading || isRoleLoading) {
		return <ComponentLoader />;
	}

	return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
