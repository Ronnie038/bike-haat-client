import React from 'react';
import { Link } from 'react-router-dom';
import errorImg2 from '../../assets/errorImage.jpg';

const ErrorElement = () => {
	return (
		<div
			className=' min-h-screen '
			style={{
				backgroundImage: `url(${errorImg2})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<Link
				className=' btn-warning font-bold text-center mx-auto block p-5'
				to='/'
			>
				Go back to home
			</Link>
		</div>
	);
};

export default ErrorElement;
