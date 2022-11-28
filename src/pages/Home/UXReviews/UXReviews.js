import React from 'react';
import { FaStar } from 'react-icons/fa';

const UXReviews = () => {
	return (
		<div>
			<h1 className='text-3xl text-center uppercase'>
				user reviews on <span className=' font bold'>ux</span>
			</h1>
			<hr className=' w-1/3 mx-auto my-5' />
			<div className='flex rounded-3xl justify-center w-80 mx-auto bg-white py-3 my-4'>
				<div className=' flex items-center  mx-auto'>
					<div className='flex text-yellow-400'>
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
					</div>
					<span className='ml-2 font-bold text-gray-400'>4.7 out of 5</span>
				</div>
			</div>
			<p className='text-center mb-3'>100 user ratings</p>
			<div className=' w-96 mx-auto overflow-hidden'>
				<div className='flex gap-2'>
					<span>5 star</span>
					<div className=' h-5 w-72 bg-slate-400 rounded-3xl'>
						<div className=' rounded-l-3xl w-4/5 h-5 bg-yellow-500'></div>
					</div>
					80%
				</div>
				<div className='flex gap-2'>
					<span>4 star</span>
					<div className=' h-5 w-72 bg-slate-400 rounded-3xl'>
						<div className=' rounded-l-3xl w-1/12 h-5 bg-yellow-500'></div>
					</div>
					10%
				</div>
				<div className='flex gap-2'>
					<span>3 star</span>
					<div className=' h-5 w-72 bg-slate-400 rounded-3xl'>
						<div className=' rounded-l-3xl w-5 h-5 bg-yellow-500'></div>
					</div>
					5%
				</div>
				<div className='flex gap-2'>
					<span>2 star</span>
					<div className=' h-5 w-72 bg-slate-400 rounded-3xl'>
						<div className=' rounded-l-3xl w-3 h-5 bg-yellow-500'></div>
					</div>
					2%
				</div>
				<div className='flex gap-2'>
					<span>2 star</span>
					<div className=' h-5 w-72 bg-slate-400 rounded-3xl'>
						<div className=' rounded-l-3xl w-2 h-5 bg-yellow-500'></div>
					</div>
					1%
				</div>
			</div>
			<h2 className='text-center text-info'>How do we calculate reatings? </h2>
		</div>
	);
};

export default UXReviews;
