import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsPeopleFill } from 'react-icons/bs';
import { GoReport } from 'react-icons/go';

const AdminMenu = () => {
	// let activeClassName = 'active ';
	return (
		<div className='font-bold'>
			<ul>
				<li>
					<NavLink
						to='/dashboard/allbuyers'
						className={({ isActive }) =>
							isActive
								? 'active flex items-center mt-5  '
								: 'linkRoute flex items-center my-5'
						}
					>
						<BsPeopleFill className='mx-2 text-green-300 text-xl' />
						All Buyers
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/dashboard/allsellers'
						className={({ isActive }) =>
							isActive
								? 'active flex items-center  '
								: 'linkRoute flex items-center my-5'
						}
					>
						<BsPeopleFill className='mx-2 text-green-300 text-xl' />
						All seller
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/dashboard/reported'
						className={({ isActive }) =>
							isActive
								? 'active flex items-center  '
								: 'linkRoute flex items-center my-5'
						}
					>
						<GoReport className='mx-2 text-green-300 text-xl' />
						Reported Items
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default AdminMenu;
