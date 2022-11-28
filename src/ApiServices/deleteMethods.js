export const deleteUserById = async (id) => {
	// console.log(id);
	const res = await fetch(`${process.env.REACT_APP_api_url}/users/${id}`, {
		method: 'delete',
		headers: {
			authorization: `bearer ${localStorage.getItem('accessToken')}`,
		},
	});
	return res;
};
export const deleteProductById = async (id) => {
	// console.log(id);
	const res = await fetch(`${process.env.REACT_APP_api_url}/product/${id}`, {
		method: 'delete',
		headers: {
			authorization: `bearer ${localStorage.getItem('accessToken')}`,
		},
	});
	return res;
};
