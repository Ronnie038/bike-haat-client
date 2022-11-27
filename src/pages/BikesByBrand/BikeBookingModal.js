import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import Loader from '../../Components/Loader/Loader';

const BikeBookingModal = ({ bikeDetail, setBikeDetail }) => {
	const { user } = useContext(AuthContext);
	const { brand, model, location, _id, resale_price, img } = bikeDetail;

	const [bookingDetail, setBookingDetail] = useState({});
	const [loading, setLoading] = useState(false);

	// const bookingInputOnblur = (e) => {
	// 	setBikeDetail;
	// 	console.log(e.target.name);
	// };

	const handleBooking = (e) => {
		e.preventDefault();
		const form = e.target;
		const location = form.location.value;
		const phone = form.phone.value;

		const bookigOBJ = {
			buyer: user.displayName,
			email: user.email,
			model: model,
			phone: phone,
			price: resale_price,
			productId: _id,
			img: img,
		};
		setLoading(true);

		fetch(`${process.env.REACT_APP_api_url}/bookings`, {
			method: 'post',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(bookigOBJ),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					toast.success('congrates booked successfully');
					setLoading(false);
				}
			})
			.catch((err) => console.log(err));

		console.log({ location, phone });

		setBikeDetail(null);
	};

	if (loading) {
		return <Loader />;
	}
	return (
		<div>
			<input type='checkbox' id='booking-modal' className='modal-toggle' />
			<div className='modal'>
				<div className='modal-box relative'>
					<label
						htmlFor='booking-modal'
						className='btn btn-sm btn-circle absolute right-2 top-2'
					>
						✕
					</label>
					<h3 className='text-lg font-bold'>Bike-brand: {brand}</h3>
					<form
						onSubmit={handleBooking}
						className='grid grid-cols-1 gap-3 mt-10'
					>
						<input
							type='text'
							disabled
							className='input w-full input-bordered '
							value={`Bike-model : ${model}`}
						/>
						<input
							type='text'
							disabled
							className='input w-full input-bordered '
							value={`price : ${resale_price}`}
						/>

						<input
							name='name'
							type='text'
							placeholder='Your Name'
							className='input w-full input-bordered'
							value={user?.displayName}
							disabled
						/>
						<input
							name='email'
							type='email'
							placeholder='Email Address'
							className='input w-full input-bordered'
							value={user?.email}
							disabled
						/>
						<input
							name='location'
							type='text'
							placeholder='location where you want meet'
							className='input w-full input-bordered'
						/>
						<input
							name='phone'
							type='text'
							placeholder='Phone Number'
							className='input w-full input-bordered'
						/>
						<br />
						<input
							className='btn btn-accent w-full'
							type='submit'
							value='Submit'
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default BikeBookingModal;
