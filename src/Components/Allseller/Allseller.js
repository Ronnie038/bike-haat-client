import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const Allseller = () => {
	const { data: sellers = [], isLoading } = useQuery({
		queryKey: ['sellers'],
		queryFn: async () => {
			try {
				const res = await axios.get(`${process.env.REACT_APP_api_url}/sellers`);
				return res.data;
			} catch (err) {
				console.log(err);
			}
		},
	});
	return <div>all seller</div>;
};

export default Allseller;
