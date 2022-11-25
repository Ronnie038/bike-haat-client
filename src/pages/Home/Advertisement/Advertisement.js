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
	if (advertisedProducts.length < 1) {
		return;
	}

	console.log(advertisedProducts);
	return (
		<>
			<div className='my-5'>
				<h1 className='text-3xl text-center my-5'> Advertisement</h1>
				<div className='flex flex-wrap'>
					{advertisedProducts?.map((product) => (
						<AdveritseCard product={product} key={product._id} />
					))}
				</div>
			</div>
			<hr />
		</>
	);
};

export default Advertisement;
