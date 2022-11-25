import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import React from 'react';
import { deleteUserById } from '../../../../ApiServices/deleteMethods';
import getUsersByRole from '../../../../ApiServices/getUsersByRole';
import verifySellerById from '../../../../ApiServices/verifySeller';

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
				if (data.deletedCount) {
					refetch();
				}
			})
			.catch((err) => console.log(err));
	};

	const verifySeller = (id) => {
		verifySellerById(id)
			.then((data) => {
				console.log(data);
				refetch();
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
							<td>
								{seller.verified ? (
									<span className=' bg-green-500 text-white p-1 rounded-lg'>
										verified
									</span>
								) : (
									<button
										onClick={() => verifySeller(seller._id)}
										className='btn btn-xs btn-primary'
									>
										verify
									</button>
								)}
							</td>
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
