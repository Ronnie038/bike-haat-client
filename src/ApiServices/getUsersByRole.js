import axios from 'axios';

const getUsersByRole = async (role) => {
	try {
		const res = await axios.get(`${process.env.REACT_APP_api_url}/${role}`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export default getUsersByRole;
