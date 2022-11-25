import React from 'react';
import { deleteProductById } from '../../../../ApiServices/deleteMethods';

const ProductCard = ({ product, refetch }) => {
	const { img, resale_price, _id } = product;

	const handleAdvirtise = (id) => {
		fetch(`${process.env.REACT_APP_api_url}/addAdvertise/${id}`, {
			method: 'put',
			headers: {
				'content-type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			})
			.catch((err) => console.log(err));
	};

	const handleDelete = (id) => {
		deleteProductById(id)
			.then((data) => {
				console.log(data);
				refetch();
			})
			.catch((err) => console.log(err));
	};
	return (
		<div className='card  bg-base-100 shadow-xl'>
			<figure>
				<img src={img} alt='Shoes' />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>
					Status
					<div className='badge badge-secondary'>
						{product.sold ? 'sold' : 'available'}
					</div>
				</h2>
				<p>Price : ${resale_price}</p>
				<div className='card-actions justify-end'>
					{!product.sold && (
						<div
							onClick={() => handleAdvirtise(_id)}
							className='badge badge-outline btn btn-primary btn-xs'
						>
							Advirtise
						</div>
					)}
					<div
						onClick={() => handleDelete(_id)}
						className='badge badge-outline btn btn-error btn-xs'
					>
						delete
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
