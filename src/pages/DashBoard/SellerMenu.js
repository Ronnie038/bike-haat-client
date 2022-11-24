import React from 'react';
import { Link } from 'react-router-dom';

const SellerMenu = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to='/dashboard/addProduct'>Add a product</Link>
				</li>
				<li>My Products</li>
				<li>My buyers</li>
			</ul>
		</div>
	);
};

export default SellerMenu;
