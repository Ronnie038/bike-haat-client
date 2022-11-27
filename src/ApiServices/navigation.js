import toast from 'react-hot-toast';
import { UseToken } from './useToken';

const navigation = (email, navigate, from, message) => {
	UseToken(email).then((data) => {
		if (data.accessToken) {
			localStorage.setItem('accessToken', data.accessToken);
			toast.success(message);
			console.log(data);
		}

		navigate(from, { replace: true });
	});
};

export { navigation };
