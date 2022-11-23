import { createBrowserRouter } from 'react-router-dom';

import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <div className='text-3xl text-red-500'>404 NOT FOUND</div>,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/signup',
				element: <SignUp></SignUp>,
			},
		],
	},
]);

export default router;
