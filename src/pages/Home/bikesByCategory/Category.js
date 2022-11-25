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
		<div className='my-5'>
			<h1 className='text-3xl text-center my-5'> What are you looking for?</h1>
			<div className=' flex justify-around flex-wrap gap-5'>
				{brands.map((brand, idx) => (
					<div
						className=' px-5 py-2 bg-yellow-300 w-48 text-center rounded-lg text-2xl'
						key={idx}
					>
						<Link to={`bikes/${brand}`}>
							<p>{brand}</p>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Category;
