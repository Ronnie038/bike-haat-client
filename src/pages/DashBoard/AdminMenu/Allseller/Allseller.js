import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { MdVerified } from 'react-icons/md';
import { Navigate, useNavigate } from 'react-router-dom';
import { deleteUserById } from '../../../../ApiServices/deleteMethods';
import getUsersByRole from '../../../../ApiServices/getUsersByRole';
import verifySellerById from '../../../../ApiServices/verifySeller';
import { AuthContext } from '../../../../contexts/AuthProvider';

const Allseller = () => {
	const { logOut } = useContext(AuthContext);
	const navigate = useNavigate();

	const {
		data: sellers = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['sellers'],
		queryFn: async () => {
			const res = await getUsersByRole('seller', logOut);

			return res.data;
		},
	});
	console.log(sellers);

	const handleDelete = (id) => {
		deleteUserById(id)
			.then((res) => {
				if (res.status === 403 || res.status === 401) {
					logOut().then(() => {
						toast.error('permission forbidden');
					});
				}
				return res.json();
			})
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
							<td className='flex'>
								{seller.name}{' '}
								{seller.verified && <MdVerified className='text-blue-500' />}
							</td>
							<td>{seller.email}</td>
							<td>
								{seller.verified ? (
									<span className=' text-green-600 font-bold p-1 rounded-lg'>
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
									className='btn btn-xs btn-delete'
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
