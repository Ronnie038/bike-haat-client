export const saveUser = (name, email, role = 'buyer') => {
	const user = { name, email, role };
	fetch(`${process.env.REACT_APP_api_url}/users`, {
		method: 'put',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify(user),
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			// setCreatedUserEmail(email);
			// getUserToken(email).then(() => {

			// });
		})
		.catch((err) => console.log(err));
};
