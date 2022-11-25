import React from 'react';
import { Link } from 'react-router-dom';

const AdminMenu = () => {
	return (
		<div>
			<ul>
				<li>Statistic</li>
				<li>
					<Link to='/dashboard/allbuyers'>All Buyers</Link>
				</li>
				<li>
					<Link to='/dashboard/allsellers'>All seller</Link>
				</li>
			</ul>
		</div>
	);
};

export default AdminMenu;
