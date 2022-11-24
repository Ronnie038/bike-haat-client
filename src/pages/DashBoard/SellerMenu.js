import React from 'react';
import { Link } from 'react-router-dom';

const SellerMenu = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to='/dashboard/addProduct'>Add a product</Link>
				</li>
				<li>
					<Link to='/dashboard/myProduct'>My product</Link>
				</li>
			</ul>
		</div>
	);
};

export default SellerMenu;
