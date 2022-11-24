import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const Allbuyers = () => {
	const { data: allBuyers = {}, isLoading } = useQuery({
		queryKey: ['allbuyers'],
		queryFn: async () => {
			const res = await axios.get(`${process.env.REACT_APP_api_url}`);

			return res.data;
		},
	});

	return <div>all buyers</div>;
};

export default Allbuyers;
