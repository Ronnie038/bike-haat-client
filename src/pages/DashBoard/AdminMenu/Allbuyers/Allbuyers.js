import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { deleteUserById } from '../../../../ApiServices/deleteMethods';
import getUsersByRole from '../../../../ApiServices/getUsersByRole';

const Allbuyers = () => {
	const {
		data: buyers = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['allbuyers'],
		queryFn: async () => {
			// const res = await axios.get(`${process.env.REACT_APP_api_url}/buyers`);
			const data = getUsersByRole('buyers');

			return data;
		},
	});

	console.log(buyers);

	const handleDelete = (id) => {
		console.log(id);
		deleteUserById(id)
			.then((data) => {
				if (data.deletedCount) {
					refetch();
				}
			})
			.catch((err) => console.log(err));
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
						<th>Control</th>
					</tr>
				</thead>
				<tbody>
					{buyers?.map((buyer, idx) => (
						<tr key={buyer._id}>
							<th>{idx + 1}</th>
							<td>{buyer.name}</td>
							<td>{buyer.email}</td>
							<td>
								{' '}
								<button
									onClick={() => handleDelete(buyer._id)}
									className='btn btn-xs btn-warning'
								>
									Delete
								</button>{' '}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Allbuyers;
