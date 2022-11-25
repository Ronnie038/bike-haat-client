import React from 'react';
import { Link } from 'react-router-dom';

const AdveritseCard = ({ product }) => {
	console.log(product);
	const { brand, condition, model, resale_price, img, location, description } =
		product;

	return (
		<div className='card w-96 bg-base-100 shadow-xl'>
			<figure>
				<img src={img} alt={model} />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>
					Brand:
					<div className='badge badge-secondary'>{brand}</div>
				</h2>
				<h2 className='card-title'>
					Price:
					<div className='badge badge-secondary'>${resale_price}</div>
				</h2>
				<h2 className='card-title'>
					Location:
					<div className='badge badge-secondary'>{location}</div>
				</h2>
				<p>{description}</p>
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
