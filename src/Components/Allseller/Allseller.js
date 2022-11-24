import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import React from 'react';
import { deleteUserById } from '../../ApiServices/deleteUserById';
import getUsersByRole from '../../ApiServices/getUsersByRole';

const Allseller = () => {
	const {
		data: sellers = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['sellers'],
		queryFn: () => {
			const data = getUsersByRole('sellers');
			return data;
		},
	});
	console.log(sellers);

	const handleDelete = (id) => {
		deleteUserById(id)
			.then((data) => {
				console.log(data);
				refetch();
			})
			.catch((err) => console.log(err));
		// fetch(`${process.env.REACT_APP_api_url}/users/${id}`, {
		// 	method: 'delete',
		// })
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		console.log(data);
		// 	});
	};
	return (
		<div className='overflow-x-auto'>
			<table className='table w-full'>
				{/* <!-- head --> */}
				<thead>
					<tr>
						<th></th>
						<th>Name</th>
						<th>email</th>
						<th>Status</th>
						<th>control</th>
					</tr>
				</thead>
				<tbody>
					{sellers?.map((seller, idx) => (
						<tr key={seller._id}>
							<th>{idx + 1}</th>
							<td>{seller.name}</td>
							<td>{seller.email}</td>
							<td>{seller.verified ? 'verified' : 'verify'}</td>
							<td>
								<button
									onClick={() => handleDelete(seller._id)}
									className='btn btn-xs btn-warning'
								>
									delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Allseller;
