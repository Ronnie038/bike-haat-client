export const saveUser = async (name, email, role = 'buyer') => {
	const user = { name, email, role };
	const res = await fetch(`${process.env.REACT_APP_api_url}/users`, {
		method: 'put',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify(user),
	});

	return await res.json();
};
