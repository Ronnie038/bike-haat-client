import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider';

const AddProduct = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const { user } = useContext(AuthContext);
	const img_host_key = process.env.REACT_APP_imgbb_key;
	// console.log(img_host_key);

	const handleAddBike = (data) => {
		console.log(data);
		// console.log(data.photo[0]);
		const image = data.photo[0];
		const formData = new FormData();
		formData.append('image', image);
		const url = `https://api.imgbb.com/1/upload?key=${img_host_key}`;
		const timeElapsed = Date.now();
		const today = new Date(timeElapsed);

		const postDate = today.toDateString();

		fetch(url, {
			method: 'post',
			body: formData,
		})
			.then((res) => res.json())
			.then((imgData) => {
				if (imgData.success) {
					console.log(imgData.data.url);

					const bikeDetailObj = {
						model: data.name,
						brand: data.brand,
						resale_price: data.price,
						orginal_price: data.orginal_price,
						email: user.email,
						seller_name: user.displayName,
						phone: data.phone,
						location: data.location,
						purchase_date: data.date,
						post_date: postDate,
						condition: data.condition,
						description: data.description,
						img: imgData.data.url,
					};

					//| save bike inforamation to the databaSe

					fetch(`${process.env.REACT_APP_api_url}/bikes`, {
						method: 'post',
						headers: {
							'content-type': 'application/json',
						},
						body: JSON.stringify(bikeDetailObj),
					})
						.then((res) => res.json())
						.then((data) => {
							console.log(data);
							toast.success('successfully img hosted');
						})
						.catch((err) => console.log(err));
				}
			})
			.catch((err) => console.log(err));

		// console.log(bikeDetailObj);
	};
	return (
		<div>
			<div className=' flex justify-center items-center'>
				<div className='w-96 p-7'>
					<h2 className='text-xl text-center'>Add your product here</h2>
					<form onSubmit={handleSubmit(handleAddBike)}>
						<div className='flex md:flex-row flex-col gap-3'>
							<div className='form-control w-full max-w-xs'>
								<label className='label'>
									{' '}
									<span className='label-text'>Bike model Name</span>
								</label>
								<input
									type='text'
									{...register('name', {
										required: 'product name is required',
									})}
									className='input input-bordered w-full max-w-xs'
								/>
								{errors.name && (
									<p className='text-red-600'>{errors.name?.message}</p>
								)}
							</div>
							<div className='form-control w-full max-w-xs'>
								<label className='label'>
									{' '}
									<span className='label-text'>Bike brand name</span>
								</label>
								<input
									type='text'
									autoComplete='on'
									{...register('brand', {
										required: 'brand name is required',
									})}
									className='input input-bordered w-full max-w-xs'
								/>

								{errors.brand && (
									<p className='text-red-600'>{errors.brand?.message}</p>
								)}
							</div>
						</div>
						<div className='flex md:flex-row flex-col gap-3'>
							<div className='form-control w-full max-w-xs'>
								<label className='label'>
									{' '}
									<span className='label-text'>Price</span>
								</label>
								<input
									type='number'
									autoComplete='on'
									{...register('price', {
										required: 'price is required',
									})}
									className='input input-bordered w-full max-w-xs'
								/>

								{errors.price && (
									<p className='text-red-600'>{errors.price?.message}</p>
								)}
							</div>
							<div className='form-control w-full max-w-xs'>
								<label className='label'>
									{' '}
									<span className='label-text'>Orginal price</span>
								</label>
								<input
									type='number'
									autoComplete='on'
									{...register('orginal_price', {
										required: 'phone is required',
									})}
									className='input input-bordered w-full max-w-xs'
								/>

								{errors.orginal_price && (
									<p className='text-red-600'>
										{errors.orginal_price?.message}
									</p>
								)}
							</div>
						</div>
						{/* 
							// |  location
						*/}
						<div className='form-control w-full max-w-xs'>
							<label className='label'>
								{' '}
								<span className='label-text'>Location</span>
							</label>
							<input
								type='text'
								autoComplete='on'
								{...register('location', {
									required: 'location is required',
								})}
								className='input input-bordered w-full max-w-xs'
							/>

							{errors.location && (
								<p className='text-red-600'>{errors.location?.message}</p>
							)}
						</div>
						<div className='form-control w-full max-w-xs'>
							<label className='label'>
								{' '}
								<span className='label-text'>Mobile Phone</span>
							</label>
							<input
								type='number'
								autoComplete='on'
								{...register('phone', {
									required: 'phone is required',
								})}
								className='input input-bordered w-full max-w-xs'
							/>

							{errors.phone && (
								<p className='text-red-600'>{errors.phone?.message}</p>
							)}
						</div>
						{/* 
							// | bike burchese date
						*/}
						<div className='form-control w-full max-w-xs'>
							<label className='label'>
								{' '}
								<span className='label-text'>Date of purchese</span>
							</label>
							<input
								type='text'
								{...register('date', {
									required: 'date is required',
								})}
								className='input input-bordered w-full max-w-xs'
							/>
							{errors.date && (
								<p className='text-red-600'>{errors.date?.message}</p>
							)}
						</div>
						{/* 
						// | bike condition option
						*/}
						<div className='form-control select-bordered py-4 '>
							<label className='label'>
								{' '}
								<span className='label-text'>Select product condition</span>
							</label>
							<select
								className='py-3'
								{...register('condition', {
									required: 'condition is required',
								})}
							>
								<option value='fair'>Fair</option>
								<option value='good'>Good</option>
								<option value='exellent'>Exellent</option>
							</select>
							{errors.condition && (
								<p className='text-red-500'>{errors.condition?.message}</p>
							)}
						</div>

						{/*
							//| photo adding input
						*/}
						<div className='form-control w-full max-w-xs'>
							<label className='label'>
								{' '}
								<span className='label-text'>Photo</span>
							</label>
							<input
								type='file'
								{...register('photo', {
									required: 'Photo is required',
								})}
								className='input input-bordered w-full max-w-xs'
							/>
							{errors.photo && (
								<p className='text-red-600'>{errors.photo?.message}</p>
							)}
						</div>
						{/* 
						// | bike descrition area
						*/}
						<div className='form-control w-full max-w-xs'>
							<label className='label'>
								{' '}
								<span className='label-text'>Bike Description</span>
							</label>
							<textarea
								type='text'
								autoComplete='on'
								{...register('description', {
									required: 'description is required',
								})}
								className='input input-bordered w-full max-w-xs'
							/>

							{errors.description && (
								<p className='text-red-600'>{errors.description?.message}</p>
							)}
						</div>

						<input
							className='btn btn-accent w-full text-white my-2'
							value='Add Product'
							type='submit'
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddProduct;
