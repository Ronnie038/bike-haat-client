import React from 'react';
import { Link } from 'react-router-dom';

const BuyerMenu = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to='/dashboard/orders'>My orders</Link>
				</li>
			</ul>
		</div>
	);
};

export default BuyerMenu;
