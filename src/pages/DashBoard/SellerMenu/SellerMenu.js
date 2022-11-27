import React from 'react';
import { FaProductHunt, FaUserAltSlash } from 'react-icons/fa';
import { MdVerifiedUser } from 'react-icons/md';
import { BsBucket } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';

const SellerMenu = () => {
	return (
		<div className='font-bold'>
			<ul>
				<li className=' '>
					<NavLink
						to='/dashboard/addProduct'
						className={({ isActive }) =>
							isActive
								? 'active flex items-center  '
								: 'linkRoute flex items-center mb-5'
						}
					>
						<FaProductHunt className='mx-2 text-red-300' />
						Add a product
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/dashboard/myProduct'
						className={({ isActive }) =>
							isActive
								? 'active flex items-center  '
								: 'linkRoute flex items-center mt-5'
						}
					>
						<BsBucket className='mx-2 text-red-300' />
						My product
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default SellerMenu;
