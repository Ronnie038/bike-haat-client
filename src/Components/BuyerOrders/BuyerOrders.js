import React from 'react';
import { FaUser } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const BuyerOrders = () => {
	const { data: bookings = {}, isLoading } = useQuery({
		queryKey: ['bookings'],
		queryFn: async () => {
			try {
				const res = axios.get(`${process.env.REACT_APP_api_url}/bookings`);
				const data = (await res).data;
				return data;
			} catch (err) {
				console.log(err);
			}
		},
	});

	return (
		<div className='overflow-x-auto'>
			<table className='table w-full'>
				<thead>
					<tr>
						<th></th>
						<th>avater</th>
						<th>title</th>
						<th>price</th>
						<th>pay</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>1</th>
						<td>
							<FaUser />
						</td>
						<td>Bajaj 150t</td>
						<td> $500</td>
						<td>pay</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default BuyerOrders;
