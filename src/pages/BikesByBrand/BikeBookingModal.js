import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const BikeBookingModal = ({ bikeDetail, setBikeDetail }) => {
	const { user } = useContext(AuthContext);
	const { brand, model, location } = bikeDetail;

	const handleBooking = (e) => {
		e.preventDefault();

		setBikeDetail(null);
	};
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
