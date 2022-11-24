import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import ProductCard from './ProductCard';

const SellerProduct = () => {
	const { user } = useContext(AuthContext);

	const { data: sellerProducts = [], isLoading } = useQuery({
		queryKey: ['sellerProducts', user?.email],

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

	console.log(sellerProducts);
	return (
		<div>
			<h3>Your Products are</h3>
			<div className='flex flex-wrap justify-around'>
				{sellerProducts?.map((product) => (
					<ProductCard product={product} key={product._id} />
				))}
			</div>
		</div>
	);
};

export default SellerProduct;
