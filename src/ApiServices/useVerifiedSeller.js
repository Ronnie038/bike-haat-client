import React, { useEffect, useState } from 'react';

const useVerifiedSeller = (email) => {
	const [isVerified, setIsVerified] = useState(false);
	const [isSellerLoading, setIsSellerLoading] = useState(true);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_api_url}/isSellerVerified/${email}`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setIsVerified(data.verified);
				console.log(data);
			});
	}, [email]);

	return [isVerified, isSellerLoading];
};

export default useVerifiedSeller;
