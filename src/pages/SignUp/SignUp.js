import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navigation } from '../../ApiServices/navigation';
import { saveUser } from '../../ApiServices/saveUser';
import { UseToken } from '../../ApiServices/useToken';
import ComponentLoader from '../../Components/Loader/ComponentLoader';
// import { getUserToken } from '../../ApiServices/auth';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { createUser, updateUser, loginWithGoogle, setLoading } =
		useContext(AuthContext);
	const [signUpError, setSignUPError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const location = useLocation();
	const navigate = useNavigate();

	const from = location.state?.from?.pathname || '/';

	const handleSignUp = (data) => {
		setIsLoading(true);
		setSignUPError('');
		createUser(data.email, data.password)
			.then((result) => {
				const user = result.user;
				const userInfo = {
					displayName: data.name,
				};
				updateUser(userInfo)
					.then(() => {
						saveUser(data.name, user.email, data.role).then((data) => {
							navigation(
								user.email,
								navigate,
								from,
								'user successfully created'
							);
						});
					})
					.catch((err) => console.log(err));
			})
			.catch((error) => {
				console.log(error);
				setSignUPError(error.code);
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
					// to navigate the user
					navigation(user.email, navigate, from, 'successfully logged in');
				});
			})
			.catch((err) => console.log(err))
			.finally(() => {
				setLoading(false);
				setIsLoading(false);
			});
	};

	return (
		<div className='h-[800px] flex justify-center items-center'>
			{isLoading && <ComponentLoader />}
			<div className='w-96 p-7'>
				<h2 className='text-xl text-center'>Sign Up</h2>
				<form onSubmit={handleSubmit(handleSignUp)}>
					<div className='form-control w-full max-w-xs'>
						<label className='label'>
							{' '}
							<span className='label-text'>Name</span>
						</label>
						<input
							type='text'
							{...register('name', {
								required: 'Name is Required',
							})}
							className='input input-bordered w-full max-w-xs'
						/>
						{errors.name && (
							<p className='text-red-500'>{errors.name.message}</p>
						)}
					</div>
					<div className='form-control w-full max-w-xs'>
						<label className='label'>
							{' '}
							<span className='label-text'>Email</span>
						</label>
						<input
							type='email'
							{...register('email', {
								required: true,
							})}
							className='input input-bordered w-full max-w-xs'
						/>
						{errors.email && (
							<p className='text-red-500'>{errors.email.message}</p>
						)}
					</div>
					<div className='form-control w-full max-w-xs'>
						<label className='label'>
							{' '}
							<span className='label-text'>Password</span>
						</label>
						<input
							type='password'
							{...register('password', {
								required: 'Password is required',
							})}
							className='input input-bordered w-full max-w-xs'
						/>
						{errors.password && (
							<p className='text-red-500'>{errors.password.message}</p>
						)}
					</div>
					<div className='form-control select-bordered py-4 '>
						<select
							{...register('role', {
								required: 'Role is required',
							})}
						>
							<option value=''>Select your Role...</option>
							<option value='buyer'>Buyer</option>
							<option value='seller'>Seller</option>
						</select>
						{errors.role && (
							<p className='text-red-500'>{errors.role.message}</p>
						)}
					</div>
					<input
						className='btn btn-accent w-full mt-4'
						value='Sign Up'
						type='submit'
					/>
					{signUpError && <p className='text-red-600'>{signUpError}</p>}
				</form>
				<p>
					Already have an account{' '}
					<Link className='text-secondary' to='/login'>
						Please Login
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

export default SignUp;
