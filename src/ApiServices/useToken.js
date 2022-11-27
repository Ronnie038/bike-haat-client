const UseToken = async (email) => {
	if (email) {
		const res = fetch(`${process.env.REACT_APP_api_url}/jwt?email=${email}`);
		return (await res).json();
		// .then((res) => res.json())
		// .then((data) => {
		// 	if (data.accessToken) {
		// 		localStorage.setItem('accessToken', data.accessToken);
		// 		// setToken(data.accessToken);

		// 		console.log(data.accessToken);
		// 		return data.accessToken;
		// 	}
		// })
		// .catch((err) => console.log(err));
	}
};

export { UseToken };
