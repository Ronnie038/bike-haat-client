import { spread } from 'axios';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Bike = ({ bike, setBikeDetail }) => {
	console.log(bike);
	const {
		_id,
		brand,
		condition,
		img,
		model,
		orginal_price,
		resale_price,
		post_date,
		purchase_date,
		location,
		description,
		phone,
	} = bike;

	const [rating, setRating] = useState([0, 0, 0, 0, 0]);

	return (
		<div key={bike._id} className='my-5 border-2 px-5'>
			<div className='card md:card-side bg-base-100 shadow-xl'>
				<figure>
					<img src={img} alt={model} />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>
						Modle: {brand} {model}
					</h2>
					<p className=' flex items-center '>
						Rating:{' '}
						{rating.map((_, idx) => (
							<span key={idx} className='ml-2 text-warning'>
								<FaStar />
							</span>
						))}
					</p>
					<p>Brand: {brand}</p>
					<p>Condition: {condition}</p>
					<p>Purchase Date: {purchase_date}</p>
					<p>Post Date: {post_date}</p>
					<p>Location: {location}</p>
					<hr />
					<p className='text-xl font-bold'>Orginal Price: ${orginal_price}</p>
					<p className='text-2xl font-bold'>
						Resale Price: <span className='text-info'>${resale_price}</span>
					</p>
					<p>Phone No. {phone}</p>

					<div className='card-actions justify-end'>
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
			</div>
		</div>
	);
};

export default Bike;
