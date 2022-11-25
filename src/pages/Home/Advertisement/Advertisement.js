import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import AdveritseCard from './AdveritseCard';

const Advertisement = () => {
	const { data: advertisedProducts = [], isLoading } = useQuery({
		queryKey: ['advertisedProducts'],
		queryFn: async () => {
			try {
				const res = await axios.get(
					`${process.env.REACT_APP_api_url}/advertisedProducts`
				);

				return await res.data;
			} catch (err) {
				console.log(err);
			}
		},
	});

	console.log(advertisedProducts);
	return (
		<div>
			<h1 className='text-3xl'> Advertisement</h1>
			<div className=''>
				{advertisedProducts?.map((product) => (
					<AdveritseCard product={product} key={product._id} />
				))}
			</div>
		</div>
	);
};

export default Advertisement;
