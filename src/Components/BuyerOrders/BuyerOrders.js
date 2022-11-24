import React from 'react';
import { FaUser } from 'react-icons/fa';

const BuyerOrders = () => {
	return (
		<div className='overflow-x-auto'>
			<table className='table w-full'>
				<thead>
					<tr>
						<th></th>
						<th>avater</th>
						<th>title</th>
						<th>price</th>
						<th>pay</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>1</th>
						<td>
							<FaUser />
						</td>
						<td>Bajaj 150t</td>
						<td> $500</td>
						<td>pay</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default BuyerOrders;
