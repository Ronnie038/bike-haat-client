import React from 'react';
import { useLoaderData } from 'react-router-dom';

const addInBookList = (id) => {
	console.log(id);
};
const BikesByBrand = () => {
	const bikes = useLoaderData();
	console.log(bikes);
	return (
		<>
			<div>
				{bikes?.map((bike) => (
					<div key={bike._id} className='my-5 border-2 px-5'>
						<h1>Model: {bike.model}</h1>
						<p>Brand: {bike.brand}</p>
						<p>Condition: {bike.condtion}</p>
						<p>Orginal price: ${bike.orginal_price}</p>
						<p>resale price: ${bike.resale_price}</p>
						<div>
							<button
								onClick={() => addInBookList(bike._id)}
								className='btn btn-primary'
							>
								{' '}
								Book
							</button>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default BikesByBrand;
