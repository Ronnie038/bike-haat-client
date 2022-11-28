import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import ComponentLoader from '../../../../Components/Loader/ComponentLoader';
import { AuthContext } from '../../../../contexts/AuthProvider';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';

const SellerProduct = () => {
	const { user, logOut } = useContext(AuthContext);
	const navigate = useNavigate();

	const {
		data: sellerProducts = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['sellerProducts', user],

		queryFn: async () => {
			try {
				const res = await axios.get(
					`${process.env.REACT_APP_api_url}/sellerProducts/${user?.email}`,
					{
						headers: {
							authorization: `Bearer ${localStorage.getItem('accessToken')}`,
						},
					}
				);

				return await res.data;
			} catch (err) {
				if (err.response.status === 401 || err.response.status === 403) {
					logOut();
					navigate('/');
				}
				console.log(err);
			}
		},
	});
	if (isLoading) {
		return <ComponentLoader />;
	}

	return (
		<div>
			<div className=' border-b-2 mb-5'>
				<h3 className='text-3xl font-bold mt-5 mb-2  text-center rounded-md p-5 '>
					{user?.displayName} your Products are
				</h3>
			</div>
			<div className='flex flex-wrap justify-around gap-5'>
				{sellerProducts.length >= 1 ? (
					sellerProducts?.map((product) => (
						<ProductCard
							product={product}
							key={product._id}
							refetch={refetch}
						/>
					))
				) : (
					<p>You did't added any products</p>
				)}
			</div>
		</div>
	);
};

export default SellerProduct;
