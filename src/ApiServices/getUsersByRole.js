import axios from 'axios';

const getUsersByRole = async (role, logout) => {
	try {
		const res = await axios.get(
			`${process.env.REACT_APP_api_url}/users/${role}`,
			{
				headers: {
					authorization: `bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		);

		return res;
	} catch (err) {
		console.log(err);
		const status = err.response.status;
		if (status === 403 || status === 401) {
			logout();
		}
	}
};

export default getUsersByRole;
