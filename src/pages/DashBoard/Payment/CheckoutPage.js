import React, { useEffect, useState } from 'react';

import {
	CardElement,
	Elements,
	useElements,
	useStripe,
} from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';

const CheckoutPage = ({ booking, refetch }) => {
	const [cardError, setCardError] = useState('');
	const [success, setSuccess] = useState('');
	const [transactionId, setTransactionId] = useState('');
	const [clientSecret, setClientSecret] = useState('');
	const [processing, setProcessing] = useState(false);
	const stripe = useStripe();
	const elements = useElements();
	const { price, patient, email, _id, productId } = booking;

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log('hello');

		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);

		if (card === null) {
			return;
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card,
		});

		if (error) {
			console.log(error);
			setCardError(error.message);
		} else {
			setCardError('');
		}
		setProcessing(true);
		setSuccess('');
		const { paymentIntent, error: confirmError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						name: patient,
						email: email,
					},
				},
			});

		if (confirmError) {
			setCardError(confirmError.message);
			return;
		}

		if (paymentIntent.status === 'succeeded') {
			const payment = {
				price,
				transactionId: paymentIntent.id,
				email,
				bookingId: _id,
				productId: productId,
			};
			fetch(`${process.env.REACT_APP_api_url}/payments`, {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
				body: JSON.stringify(payment),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.insertedId) {
						setSuccess('Congrates! your payment completed');
						setTransactionId(paymentIntent.id);
						toast.success('payment successfull');
						refetch();
					}
				})
				.catch((err) => console.log(err));
		}
		setProcessing(false);
	};

	useEffect(() => {
		fetch(`${process.env.REACT_APP_api_url}/create-payment-intent`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				authorization: `bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify({ price }),
		})
			.then((res) => res.json())
			.then((data) => {
				setClientSecret(data.clientSecret);
				refetch();
			})
			.catch((err) => console.log(err));
	}, [price]);
	return (
		<>
			<form onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: '16px',
								color: '#424770',
								'::placeholder': {
									color: '#aab7c4',
								},
							},
							invalid: {
								color: '#9e2146',
							},
						},
					}}
				/>
				<button
					type='submit '
					className={`btn ${
						stripe && clientSecret && 'btn-warning'
					} btn-xs my-3`}
					disabled={!stripe || !clientSecret || processing}
				>
					{processing ? 'processing' : 'pay'}
				</button>
			</form>
			<p className='text-red-500'>{cardError}</p>
			{success && (
				<div>
					<p className='text-green-500 '>{success}</p>
					<p>Transaction Id : {transactionId}</p>
				</div>
			)}
		</>
	);
};

export default CheckoutPage;
