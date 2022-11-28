import React, { useContext, useState } from 'react';
import {
	useLoaderData,
	isRouteErrorResponse,
	useRouteError,
} from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Bike from './Bike';
import BikeBookingModal from './BikeBookingModal';

const BikesByBrand = (id) => {
	const { logOut } = useContext(AuthContext);
	const error = useRouteError();
	// const routerErr = isRouteErrorResponse(error);
	// console.log(error);
	// console.log(error.status);
	// console.log(id);

	const bikes = useLoaderData();

	const [bikeDetail, setBikeDetail] = useState([]);

	if (isRouteErrorResponse(error)) {
		return logOut();
	}
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
