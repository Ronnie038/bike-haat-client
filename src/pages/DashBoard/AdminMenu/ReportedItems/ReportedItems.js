import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { deleteProductById } from '../../../../ApiServices/deleteMethods';
import useRoutesByRole from '../../../../ApiServices/useRoutesByRole';
import { AuthContext } from '../../../../contexts/AuthProvider';

const ReportedItems = () => {
	const { user, logOut } = useContext(AuthContext);

	const [role, isRoleLoading] = useRoutesByRole(user?.email);
	const {
		data: reporteditem = [],
		refetch,
		isLoading,
	} = useQuery({
		queryKey: ['reporteditem'],
		queryFn: async () => {
			try {
				const res = await fetch(
					`${process.env.REACT_APP_api_url}/reporteditem`
				);
				const data = await res.json();

				return data;
			} catch (err) {
				console.log(err);
			}
		},
	});

	const handleReportDelete = (id) => {
		const confirm = window.confirm('are sure you want to delete');
		if (!confirm) return;
		if (role !== 'admin') return toast.error('only admin have the permission');

		deleteProductById(id)
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
	return (
		<div>
			<h1 className='text-2xl  mb-5 font-bold text-center my-3'>
				All Reported Items
			</h1>
			<div className='overflow-x-auto'>
				<table className='table w-full'>
					{/* <!-- head --> */}
					<thead>
						<tr className='border-b-2 my-3'>
							<td></td>
							{/* <th>Name</th> */}
							<td>Item Photo</td>
							<th>Title</th>
							<th>Report Item</th>
							<th>Delete Here</th>
						</tr>
					</thead>
					<tbody>
						{reporteditem?.map((item, idx) => (
							<tr key={item._id} className='border-b-2'>
								<th>{idx + 1}</th>
								<td>
									<img src={item.img} className='w-12 h-15' alt='' />
								</td>
								<td>{item.model}</td>
								<td>
									{item.reported ? (
										<>
											<h1>reported</h1>
										</>
									) : (
										''
									)}
								</td>
								{/* <td>{item.slot}</td> */}
								<td>
									{' '}
									<button
										className='border btn-error btn btn-xs '
										onClick={() => handleReportDelete(item._id)}
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ReportedItems;
