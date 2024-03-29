import React from 'react';
// import {} from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaMotorcycle } from 'react-icons/fa';
import ComponentLoader from '../../../Components/Loader/ComponentLoader';

const Category = () => {
	// const brands = ['BMW', 'Honda', 'Bajaj'];
	const { data: brands = [], isLoading } = useQuery({
		queryKey: ['brands'],
		queryFn: async () => {
			const res = await axios.get(`${process.env.REACT_APP_api_url}/brands`);
			return res.data;
		},
	});

	// if (isLoading) {
	// 	return <ComponentLoader />;
	// }

	return (
		<div className='my-5 shadow-md p-5'>
			<h1 className='text-3xl text-center my-5'> What are you looking for?</h1>

			{isLoading && <ComponentLoader />}

			<hr className='mb-5 md:w-2/4 w-full mx-auto' />
			<div className=' flex justify-around flex-wrap gap-5'>
				{brands.map((brand, idx) => (
					<div key={idx} className='bg-white '>
						<Link to={`bikes/${brand}`}>
							<div className='px-5 py-2  h-32  flex flex-col justify-center items-center  text-black w-48 text-center rounded-lg uppercase text-2xl'>
								<FaMotorcycle className=' text-orange-300 font-bold' />
								<p>{brand}</p>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Category;
