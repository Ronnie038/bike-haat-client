import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import ComponentLoader from '../../Components/Loader/ComponentLoader';
import { AuthContext } from '../../contexts/AuthProvider';
import Bike from './Bike';
import BikeBookingModal from './BikeBookingModal';

const BikesByBrand = () => {
	const { logOut } = useContext(AuthContext);
	const { brand } = useParams();
	const [bikeDetail, setBikeDetail] = useState(null);
	const navigate = useNavigate();

	const { data: bikes = [], isLoading } = useQuery({
		queryKey: ['bikes', brand],
		queryFn: async () => {
			try {
				const res = await fetch(
					`${process.env.REACT_APP_api_url}/bikes/${brand}`,
					{
						headers: {
							authorization: `Bearer ${localStorage.getItem('accessToken')}`,
						},
					}
				);
				console.log(res);
				if (res.status === 401 || res.status === 403) {
					logOut();
					navigate('/');
				}
				const data = (await res).json();
				return data;
			} catch (err) {
				console.log(err);
			}
		},
	});
	if (isLoading) {
		return <ComponentLoader />;
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
