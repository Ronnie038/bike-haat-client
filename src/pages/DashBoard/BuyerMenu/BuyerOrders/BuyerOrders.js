import React, { useContext, useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// import CheckoutModal from '../../Payment/CheckoutModal';
import { AuthContext } from '../../../../contexts/AuthProvider';
import CheckoutModal from '../../Payment/CheckoutModal';
import ComponentLoader from '../../../../Components/Loader/ComponentLoader';
import toast from 'react-hot-toast';

const BuyerOrders = () => {
	const { user, logOut } = useContext(AuthContext);
	// const [bookings, setBookings] = useState([]);
	const [toggle, setToggle] = useState(false);

	const [product, setProduct] = useState(null);

	const {
		data: bookings = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['bookings', user?.email],
		queryFn: async () => {
			try {
				const res = axios.get(
					`${process.env.REACT_APP_api_url}/bookings?email=${user?.email}`,
					{
						headers: {
							'content-type': 'application/json',
							authorization: `Bearer ${localStorage.getItem('accessToken')}`,
						},
					}
				);

				return (await res).data;
			} catch (err) {
				console.log(err);
				if (err.response.status === 401 || err.response.status === 403) {
					logOut().then(() => {
						toast.error('permission forbidden');
					});
				}
			}
		},
	});

	if (isLoading) {
		return <ComponentLoader />;
	}

	// useEffect(() => {
	// 	axios
	// 		.get(`${process.env.REACT_APP_api_url}/bookings?email=${user?.email}`)
	// 		.then((res) => setBookings(res.data))
	// 		.catch((err) => console.log(err));
	// }, [user?.email]);

	return (
		<div className='overflow-x-auto w-full'>
			<div className=' border-b-2 mb-5'>
				<h3 className='text-3xl font-bold mt-5 mb-2  text-center rounded-md p-5 '>
					{user?.displayName} your bookings are
				</h3>
			</div>
			{bookings.length >= 1 ? (
				<table className='table w-full'>
					{/* <!-- head --> */}
					<thead>
						<tr>
							{/* <th className='bg-red-400 invisible'>avatar</th> */}
							<td className=''>AVATAR</td>
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
							<td>avatar</td>
							<th>Name</th>
							<th>Job</th>
							<th>Favorite Color</th>
							<th></th>
						</tr>
					</tfoot>
				</table>
			) : (
				<p className='text-center text-2xl'> You have no booking!</p>
			)}

			{/* <CheckoutModal /> */}
			{product && <CheckoutModal product={product} refetch={refetch} />}
		</div>
	);
};

export default BuyerOrders;
