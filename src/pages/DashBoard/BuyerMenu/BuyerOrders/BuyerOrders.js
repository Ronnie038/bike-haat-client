import React, { useContext, useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// import CheckoutModal from '../../Payment/CheckoutModal';
import { AuthContext } from '../../../../contexts/AuthProvider';
import CheckoutModal from '../../Payment/CheckoutModal';

const BuyerOrders = () => {
	const { user } = useContext(AuthContext);
	// const [bookings, setBookings] = useState([]);
	const [toggle, setToggle] = useState(false);

	const [product, setProduct] = useState(null);

	const { data: bookings = [], isLoading } = useQuery({
		queryKey: ['bookings', user?.email],
		queryFn: async () => {
			try {
				const res = axios.get(
					`${process.env.REACT_APP_api_url}/bookings?email=${user?.email}`
				);

				return (await res).data;
			} catch (err) {
				console.log(err);
			}
		},
	});

	if (isLoading) {
		return <div className='text-3xl'>......LOADING</div>;
	}

	// useEffect(() => {
	// 	axios
	// 		.get(`${process.env.REACT_APP_api_url}/bookings?email=${user?.email}`)
	// 		.then((res) => setBookings(res.data))
	// 		.catch((err) => console.log(err));
	// }, [user?.email]);

	return (
		<div className='overflow-x-auto w-full'>
			<table className='table w-full'>
				{/* <!-- head --> */}
				<thead>
					<tr>
						{/* <th className='bg-red-400 invisible'>avatar</th> */}
						<th className='invisible md:visible'></th>
						<th>Name</th>
						<th>price</th>
						<th>Payment Status</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{bookings?.map((booking, idx) => (
						<tr key={idx}>
							<td>
								<div className='avatar'>
									<div className='mask mask-squircle w-12 h-12'>
										<img
											src={booking?.img}
											alt='Avatar Tailwind CSS Component'
										/>
									</div>
								</div>
							</td>
							<td>{booking.model}</td>
							<td>{booking.price}</td>
							<th>
								{!booking.paid ? (
									<label
										onClick={() => setProduct(booking)}
										htmlFor='payment-modal'
										className='btn  btn-xs btn-warning'
									>
										pay
									</label>
								) : (
									'paid'
								)}
							</th>
						</tr>
					))}
				</tbody>

				<tfoot>
					<tr>
						<th>avatar</th>
						<th>Name</th>
						<th>Job</th>
						<th>Favorite Color</th>
						<th></th>
					</tr>
				</tfoot>
			</table>

			{/* <CheckoutModal /> */}
			{product && <CheckoutModal product={product} />}
		</div>
	);
};

export default BuyerOrders;
