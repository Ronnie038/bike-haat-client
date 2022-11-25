import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import ProductCard from './ProductCard';

const SellerProduct = () => {
	const { user } = useContext(AuthContext);

	const {
		data: sellerProducts = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['sellerProducts', user],

		queryFn: async () => {
			try {
				const res = await axios.get(
					`${process.env.REACT_APP_api_url}/sellerProducts/${user?.email}`
				);
				console.log(res);

				return await res.data;
			} catch (err) {
				console.log(err);
			}
		},
	});

	// console.log(sellerProducts);
	return (
		<div>
			<h3 className='text-3xl font-bold my-5 bg-amber-300 text-center rounded-md p-5'>
				{user?.displayName} your Products are
			</h3>
			<div className='flex flex-wrap justify-around gap-5'>
				{sellerProducts?.map((product) => (
					<ProductCard product={product} key={product._id} refetch={refetch} />
				))}
			</div>
		</div>
	);
};

export default SellerProduct;
