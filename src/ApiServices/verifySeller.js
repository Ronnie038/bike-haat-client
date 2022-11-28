const verifySellerById = async (id) => {
	const res = await fetch(`${process.env.REACT_APP_api_url}/verifySeller`, {
		method: 'put',
		headers: {
			'content-type': 'application/json',

			authorization: `Bearer ${localStorage.getItem('accessToken')}`,
		},
		body: JSON.stringify({ id }),
	});
	const data = res.json();

	return data;
};

export default verifySellerById;
