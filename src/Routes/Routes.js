import { createBrowserRouter } from 'react-router-dom';
import AddProduct from '../Components/AddProduct/AddProduct';
import Allbuyers from '../Components/Allbuyers/Allbuyers';
import Allseller from '../Components/Allseller/Allseller';
import BuyerOrders from '../Components/BuyerOrders/BuyerOrders';
import SellerProduct from '../Components/SellerProduct/SellerProducts';
import DashboardLayout from '../Layout/DashboardLayout';

import Main from '../Layout/Main';
import BikesByBrand from '../pages/BikesByBrand/BikesByBrand';
import Advertisement from '../pages/Home/Advertisement/Advertisement';
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
			{
				path: '/bikes/:brand',
				element: <BikesByBrand />,
				loader: ({ params }) =>
					fetch(`${process.env.REACT_APP_api_url}/bikes/${params.brand}`),
			},
		],
	},
	{
		path: '/dashboard',
		element: <DashboardLayout />,
		children: [
			{
				path: '',
				element: <div>hello bangladesh</div>,
			},
			{
				path: 'orders',
				element: <BuyerOrders />,
			},
			{
				path: 'allbuyers',
				element: <Allbuyers />,
			},
			{
				path: 'allsellers',
				element: <Allseller />,
			},
			{
				path: 'addProduct',
				element: <AddProduct />,
			},
			{
				path: 'myProduct',
				element: <SellerProduct />,
			},
		],
	},
]);

export default router;
