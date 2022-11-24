import React from 'react';
// import {} from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import axios from 'axios';
import { Link } from 'react-router-dom';

const Category = () => {
	// const brands = ['BMW', 'Honda', 'Bajaj'];
	const { data: brands = [], isLoading } = useQuery({
		queryKey: ['brands'],
		queryFn: async () => {
			const res = await axios.get(`${process.env.REACT_APP_api_url}/brands`);
			return res.data;
		},
	});

	console.log(brands);

	return (
		<div>
			<h1 className='text-3xl'> What are you looking for?</h1>
			{brands.map((brand, idx) => (
				<div className='' key={idx}>
					<Link to={`bikes/${brand}`}>
						<p>{brand}</p>
					</Link>
				</div>
			))}
		</div>
	);
};

export default Category;
