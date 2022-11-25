import React from 'react';

const CheckoutModal = () => {
	return (
		<div>
			<input type='checkbox' id='payment-modal' className='modal-toggle' />
			<div className='modal'>
				<div className='modal-box relative'>
					<label
						htmlFor='payment-modal'
						className='btn btn-sm btn-circle absolute right-2 top-2'
					>
						✕
					</label>
					<h3 className='text-lg font-bold'>Bike-brand: </h3>
					<form
						// onSubmit={handleBooking}
						className='grid grid-cols-1 gap-3 mt-10'
					>
						hello there
					</form>
				</div>
			</div>
		</div>
	);
};

export default CheckoutModal;
