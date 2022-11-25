import React from 'react';
import { MdVerified } from 'react-icons/md';
import { Link } from 'react-router-dom';
import useVerifiedSeller from '../../../ApiServices/useVerifiedSeller';

const AdveritseCard = ({ product }) => {
	console.log(product);
	const { brand, condition, model, resale_price, img, seller_name, email } =
		product;

	const [isVerified, isSellerLoading] = useVerifiedSeller(email);

	return (
		<div className=' bg-base-100  shadow-xl '>
			<figure>
				<img src={img} alt={model} className='' />
			</figure>
			<div className='p-5'>
				<p>Brand : {brand}</p>
				<p>Model : {model}</p>
				<p>Condition : {condition}</p>
				<p>Price : {resale_price}</p>
				<div className=''>
					<p className='flex'>
						<span className='font-bold'>Seller</span>: {seller_name}
						{isVerified && <MdVerified className=' text-blue-600' />}
					</p>
				</div>
				<div className='card-actions justify-end '>
					<Link className='btn btn-primary btn-xs' to={`/bikes/${brand}`}>
						See More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AdveritseCard;
