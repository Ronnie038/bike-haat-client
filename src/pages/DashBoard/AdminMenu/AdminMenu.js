import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsPeopleFill } from 'react-icons/bs';

const AdminMenu = () => {
	// let activeClassName = 'active ';
	return (
		<div className='font-bold'>
			<ul>
				<li>Statistic</li>

				<li>
					<NavLink
						to='/dashboard/allbuyers'
						className={({ isActive }) =>
							isActive
								? 'active flex items-center mt-5  '
								: 'linkRoute flex items-center my-5'
						}
					>
						<BsPeopleFill className='mx-2 text-red-300' />
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
						<BsPeopleFill className='mx-2 text-red-300' />
						All seller
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default AdminMenu;
