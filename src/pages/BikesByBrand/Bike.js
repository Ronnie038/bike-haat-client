import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import useVerifiedSeller from '../../ApiServices/useVerifiedSeller';

const Bike = ({ bike, setBikeDetail }) => {
	console.log(bike);
	const {
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
		email,
		seller_name,
		_id,
	} = bike;

	console.log(email);

	const [rating, setRating] = useState([0, 0, 0, 0, 0]);
	const [isVerified, isSellerLoading] = useVerifiedSeller(email);

	const handleReport = (id) => {
		fetch(`${process.env.REACT_APP_api_url}/reported/${id}`, {
			method: 'PUT',
		})
			.then((res) => res.json())
			.then((data) => {
				toast.success('reported product');
				console.log(data);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className=' px-5 my-10 '>
			<div className='card md:card-side max-w-4xl bg-base-100 shadow-xl p-5 mx-auto'>
				<figure className=' flex-grow '>
					<img src={img} alt={model} className=' max-w-md max-h-96' />
				</figure>
				<div className='card-body max-w-xl '>
					<div className='flex flex-col md:flex-row gap-10'>
						<div className=''>
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
						</div>
						<div className=''>
							<span className='font-bold'>Details</span>: {description}
						</div>
					</div>
					<hr />
					<div className='font-bold'>
						<p className='flex'>
							<span>Seller: </span>
							{seller_name}
							{isVerified && <MdVerified className=' text-blue-500' />}
						</p>
					</div>
					<p className='text-xl font-bold'>Orginal Price: ${orginal_price}</p>
					<p className='text-2xl font-bold'>
						Resale Price: <span className='text-info'>${resale_price}</span>
					</p>
					<p>Phone No. {phone}</p>
					<p>
						Report:
						<button
							onClick={() => handleReport(_id)}
							className='btn btn-xs btn-error ml-2'
						>
							{' '}
							To admin
						</button>
					</p>

					<div className='card-actions justify-end'>
						<label
							onClick={() => setBikeDetail(bike)}
							className='btn btn-sm btn-primary'
							htmlFor='booking-modal'
						>
							{' '}
							Book now
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Bike;
