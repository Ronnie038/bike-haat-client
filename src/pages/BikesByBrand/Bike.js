import React from 'react';

const Bike = ({ bike, setBikeDetail }) => {
	return (
		<div key={bike._id} className='my-5 border-2 px-5'>
			<h1>Model: {bike.model}</h1>
			<p>Brand: {bike.brand}</p>
			<p>Condition: {bike.condtion}</p>
			<p>Orginal price: ${bike.orginal_price}</p>
			<p>resale price: ${bike.resale_price}</p>
			<div>
				<label
					onClick={() => setBikeDetail(bike)}
					className='btn btn-sm btn-primary'
					htmlFor='booking-modal'
				>
					{' '}
					Book
				</label>
			</div>
		</div>
	);
};

export default Bike;
