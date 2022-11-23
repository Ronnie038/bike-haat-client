import React from 'react';

const Category = () => {
	const brands = ['BMW', 'Honda', 'Ford', 'Hyundai'];
	return (
		<div>
			<h1 className='text-3xl'> What are you looking for?</h1>
			{brands.map((brand, idx) => (
				<>
					<div className='' key={idx}>
						{brand}
					</div>
				</>
			))}
		</div>
	);
};

export default Category;
