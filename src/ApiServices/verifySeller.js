const verifySellerById = async (id) => {
	const res = await fetch(
		`${process.env.REACT_APP_api_url}/verifySeller/${id}`,
		{
			method: 'put',
			headers: {
				authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		}
	);
	const data = res.json();

	return data;
};

export default verifySellerById;
