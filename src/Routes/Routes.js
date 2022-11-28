import { createBrowserRouter } from 'react-router-dom';

import SellerProduct from '../pages/DashBoard/SellerMenu/SellerProduct/SellerProducts';
import DashboardLayout from '../Layout/DashboardLayout';

import Main from '../Layout/Main';
import BikesByBrand from '../pages/BikesByBrand/BikesByBrand';
import Advertisement from '../pages/Home/Advertisement/Advertisement';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import AddProduct from '../pages/DashBoard/SellerMenu/AddProduct/AddProduct';
import Allbuyers from '../pages/DashBoard/AdminMenu/Allbuyers/Allbuyers';
import Allseller from '../pages/DashBoard/AdminMenu/Allseller/Allseller';
import BuyerOrders from '../pages/DashBoard/BuyerMenu/BuyerOrders/BuyerOrders';
import PrivateRoute from './PrivateRoutes/PrivateRoutes';
import AdminRoute from './PrivateRoutes/AdminRoute';
import ReportedItems from '../pages/DashBoard/AdminMenu/ReportedItems/ReportedItems';
import ErrorElement from '../pages/ErrorElement/ErrorElement';
import WelcomePage from '../pages/DashBoard/WelcomeDashBoard/WelcomePage';
import SellerRoute from './PrivateRoutes/SellerRoute';
import Blogs from '../pages/Blog/Blogs';
import { FaBandAid } from 'react-icons/fa';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <ErrorElement />,
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
				path: '/blogs',
				element: <Blogs />,
			},
			{
				path: '/bikes/:brand',

				loader: ({ params }) => {
					return params;
				},
				// fetch(`${process.env.REACT_APP_api_url}/bikes/${params.brand}`, {
				// 	headers: {
				// 		authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				// 	},
				// }),
				element: (
					<PrivateRoute>
						<BikesByBrand />
					</PrivateRoute>
				),
			},
		],
	},
	{
		path: '/dashboard',
		element: (
			<PrivateRoute>
				<DashboardLayout />
			</PrivateRoute>
		),
		errorElement: <ErrorElement />,
		children: [
			{
				path: '',
				element: <WelcomePage />,
			},
			{
				path: 'orders',
				element: <BuyerOrders />,
			},
			{
				path: 'allbuyers',
				element: (
					<AdminRoute>
						<Allbuyers />
					</AdminRoute>
				),
			},
			{
				path: 'allsellers',
				element: (
					<AdminRoute>
						<Allseller />
					</AdminRoute>
				),
			},
			{
				path: 'reported',
				element: (
					<AdminRoute>
						<ReportedItems />
					</AdminRoute>
				),
			},
			{
				path: 'addProduct',
				element: (
					<SellerRoute>
						<AddProduct />
					</SellerRoute>
				),
			},
			{
				path: 'myProduct',
				element: (
					<SellerRoute>
						<SellerProduct />
					</SellerRoute>
				),
			},
		],
	},
]);

export default router;
