import React from 'react';

// import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutPage from './CheckoutPage';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(`${process.env.REACT_APP_stripe_pk}`);

console.log(process.env.REACT_APP_stripe_pk);
const CheckoutModal = ({ product, refetch }) => {
	return (
		<div data-theme='light'>
			<input type='checkbox' id='payment-modal' className='modal-toggle' />
			<div className='modal'>
				<div className='modal-box relative'>
					<label
						htmlFor='payment-modal'
						className='btn btn-sm btn-circle absolute right-2 top-2'
					>
						✕
					</label>
					<div className='mb-12 '>
						<h3 className='text-3xl font-bold  mb-5'> Payment</h3>
						<p>Complete your payment for {product.model}</p>
						<p className='text-xl font-bold bg-gray-200 px-3 py-5 rounded-sm'>
							<span className='text-stone-400'>$</span>
							<span className='text-2xl mx-1'>{product.price}</span>
							<span className=' text-stone-400'>USD</span>
						</p>
					</div>

					<div className='h-[400px]'>
						<Elements stripe={stripePromise}>
							<CheckoutPage booking={product} refetch={refetch} />
						</Elements>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckoutModal;
