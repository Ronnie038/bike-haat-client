import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdProductionQuantityLimits } from 'react-icons/md';

const BuyerMenu = () => {
	return (
		<div className='font-bold'>
			<ul>
				<li>
					<NavLink
						to='/dashboard/orders'
						className={({ isActive }) =>
							isActive
								? 'active flex items-center mt-5  '
								: 'linkRoute flex items-center my-5'
						}
					>
						<MdProductionQuantityLimits className='mx-2 text-xl text-red-300' />
						My orders
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default BuyerMenu;
