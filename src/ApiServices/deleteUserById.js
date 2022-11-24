import axios from 'axios';

export const deleteUserById = async (id) => {
	console.log(id);
	const res = await fetch(`${process.env.REACT_APP_api_url}/users/${id}`, {
		method: 'delete',
	});
	return await res.json();
};
