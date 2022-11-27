import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navigation } from '../../ApiServices/navigation';
import { saveUser } from '../../ApiServices/saveUser';
import { UseToken } from '../../ApiServices/useToken';
import ComponentLoader from '../../Components/Loader/ComponentLoader';

import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const { signIn, loginWithGoogle, setLoading } = useContext(AuthContext);

	const [loginError, setLoginError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const location = useLocation();
	const navigate = useNavigate();

	const from = location.state?.from?.pathname || '/';

	const handleLogin = (data) => {
		setIsLoading(true);
		console.log(data);
		setLoginError('');
		signIn(data.email, data.password)
			.then((result) => {
				const user = result.user;
				console.log(user);

				// to navigate user
				navigation(user.email, navigate, from, 'successfully logged in');
			})
			.catch((error) => {
				console.log(error.message);
				setLoginError(error.message);
			})
			.finally(() => {
				setLoading(false);
				setIsLoading(false);
			});
	};

	const googleLogin = () => {
		setIsLoading(true);
		loginWithGoogle()
			.then((result) => {
				const user = result.user;
				saveUser(user.displayName, user.email).then((data) => {
					// to navigate user
					navigation(user.email, navigate, from, 'successfully logged in');
				});
				console.log(user);
			})
			.catch((err) => console.log(err))
			.finally(() => {
				setLoading(false);
				setIsLoading(false);
			});
	};

	// if (isLoading) {
	// 	return <div>Loading</div>;
	// }

	return (
		<div className='h-[800px] flex justify-center items-center'>
			{isLoading && <ComponentLoader />}
			<div className='w-96 p-7'>
				<h2 className='text-xl text-center'>Login</h2>
				<form onSubmit={handleSubmit(handleLogin)}>
					<div className='form-control w-full max-w-xs'>
						<label className='label'>
							{' '}
							<span className='label-text'>Email</span>
						</label>
						<input
							type='text'
							{...register('email', {
								required: 'Email Address is required',
							})}
							className='input input-bordered w-full max-w-xs'
						/>
						{errors.email && (
							<p className='text-red-600'>{errors.email?.message}</p>
						)}
					</div>
					<div className='form-control w-full max-w-xs'>
						<label className='label'>
							{' '}
							<span className='label-text'>Password</span>
						</label>
						<input
							type='password'
							autoComplete='on'
							{...register('password', {
								required: 'Password is required',
							})}
							className='input input-bordered w-full max-w-xs'
						/>
						<label className='label'>
							{' '}
							{/* <span className='label-text'>Forget Password?</span> */}
						</label>
						{errors.password && (
							<p className='text-red-600'>{errors.password?.message}</p>
						)}
					</div>
					<input
						className='btn btn-accent w-full'
						value='Login'
						type='submit'
					/>
					<div>
						{loginError && <p className='text-red-600'>{loginError}</p>}
					</div>
				</form>
				<p>
					New to Bike-haat?{' '}
					<Link className='text-secondary' to='/signup'>
						Create new Account
					</Link>
				</p>
				<div className='divider'>OR</div>
				<button onClick={googleLogin} className='btn btn-outline w-full'>
					CONTINUE WITH GOOGLE
				</button>
			</div>
		</div>
	);
};

export default Login;
