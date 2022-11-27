import React from 'react';
// import {} from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaMotorcycle } from 'react-icons/fa';

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

	if (isLoading) {
		return <div>........Loading</div>;
	}

	return (
		<div className='my-5'>
			<h1 className='text-3xl text-center my-5'> What are you looking for?</h1>
			<hr className='mb-5' />
			<div className=' flex justify-around flex-wrap gap-5'>
				{brands.map((brand, idx) => (
					<div
						className=' px-5 py-2 bg-primary flex justify-between text-white w-48 text-center rounded-lg uppercase text-2xl'
						key={idx}
					>
						<FaMotorcycle className=' text-orange-300 font-bold' />
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
