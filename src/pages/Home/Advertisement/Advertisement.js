import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import ComponentLoader from '../../../Components/Loader/ComponentLoader';
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
			<div className='my-5 relative shadow-lg shadow-cyan-200/10 '>
				<h1 className='text-3xl text-center my-5'> Advertised</h1>
				<hr className='mb-5 w-1/3 mx-auto' />
				<div className='flex flex-wrap justify-center'>
					{advertisedProducts?.map((product) => (
						<AdveritseCard product={product} key={product._id} />
					))}
				</div>
			</div>
		</>
	);
};

export default Advertisement;
