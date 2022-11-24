import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const Advertisement = () => {
	const { data: advertisedProducts = [], isLoading } = useQuery({
		queryKey: ['advertisedProducts'],
		queryFn: async () => {
			try {
				const res = await axios.get(
					`${process.env.REACT_APP_api_url}/advertisedProducts`
				);

				return await res.data;
			} catch (err) {
				console.log(err);
			}
		},
	});

	console.log(advertisedProducts);
	return (
		<div>
			<h1 className='text-3xl'> Advertisement</h1>
			<div className='card card-side bg-base-100 shadow-xl'>
				<figure>
					<img src='https://placeimg.com/200/280/arch' alt='Movie' />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>New movie is released!</h2>
					<p>Click the button to watch on Jetflix app.</p>
					<div className='card-actions justify-end'>
						<button className='btn btn-primary'>Watch</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Advertisement;
