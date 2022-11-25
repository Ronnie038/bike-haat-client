import React, { useEffect, useState } from 'react';

const useRoutesByRole = (email) => {
	const [role, setRole] = useState('');
	const [isRoleLoading, setIsRoleLoading] = useState(true);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_api_url}/useRole/${email}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setIsRoleLoading(false);
				setRole(data.role);
			})
			.catch((err) => console.log(err));
	}, [email]);
	return [role, isRoleLoading];
};

export default useRoutesByRole;
