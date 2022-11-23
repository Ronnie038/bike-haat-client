import React from 'react';
import { useQuery } from '@tanstack/react-query';

import axios from 'axios';

const Category = () => {
	// const brands = ['BMW', 'Honda', 'Bajaj'];
	const { data: brands = [], isLoading } = useQuery({
		queryKey: ['brands'],
		queryFn: () => {
			axios.get(`${process.env.REACT_APP_api_url}/brands`).then((res) => {
				return res.data;
			});
		},
	});

	return (
		<div>
			<h1 className='text-3xl'> What are you looking for?</h1>
			{brands.map((brand, idx) => (
				<div className='' key={idx}>
					{brand}
				</div>
			))}
		</div>
	);
};

export default Category;
