import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import { deleteUserById } from '../../../../ApiServices/deleteMethods';
import getUsersByRole from '../../../../ApiServices/getUsersByRole';
import ComponentLoader from '../../../../Components/Loader/ComponentLoader';

import { AuthContext } from '../../../../contexts/AuthProvider';

const Allbuyers = () => {
	const { logOut } = useContext(AuthContext);
	const navigate = useNavigate();
	const {
		data: buyers = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['allbuyers'],
		queryFn: async () => {
			// const res = await axios.get(`${process.env.REACT_APP_api_url}/buyers`);
			const res = await getUsersByRole('buyer', logOut);

			return res.data;
		},
	});

	console.log(buyers);

	const handleDelete = (id) => {
		console.log(id);
		deleteUserById(id)
			.then((res) => {
				if (res.status === 403 || res.status === 401) {
					logOut()
						.then(() => {
							toast.error('permission forbidden');
						})
						.catch((err) => console.log(err));
					return;
				}

				return res.json();
			})
			.then((data) => {
				console.log(data);
				if (data.deletedCount) {
					refetch();
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className='overflow-x-auto -z-40'>
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
									className='btn btn-xs btn-delete '
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
