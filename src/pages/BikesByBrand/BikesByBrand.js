import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Bike from './Bike';
import BikeBookingModal from './BikeBookingModal';

const BikesByBrand = () => {
	const bikes = useLoaderData();
	const [bikeDetail, setBikeDetail] = useState(null);

	console.log(bikeDetail);
	return (
		<>
			<div>
				{bikes?.map((bike) => (
					<Bike key={bike._id} bike={bike} setBikeDetail={setBikeDetail} />
				))}
			</div>
			<div>
				{bikeDetail && (
					<BikeBookingModal
						bikeDetail={bikeDetail}
						setBikeDetail={setBikeDetail}
					/>
				)}
			</div>
		</>
	);
};

export default BikesByBrand;
