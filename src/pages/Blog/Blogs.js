import React from 'react';

const Blogs = () => {
	return (
		<div>
			<h2 className='text-center text-3xl font-bold my-5'>Blogs</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 m-5'>
				<div className='border rounded p-3'>
					<h2 className='text-center font-bold my-3'>
						What are the different ways to manage a state in a React
						application?
					</h2>
					<div>
						<p>The Four Kinds of React State to Manage</p>
						<p>
							1.Local State : Local state is data we manage in one or another
							component.
						</p>
						<p>
							2.Global State : Global state is data we manage across multiple
							components.
						</p>
						<p>
							3.URL State : Data that exists on our URLs, including the pathname
							and query parameters.
						</p>
					</div>
				</div>
				<div className='border rounded p-3'>
					<h2 className='text-center font-bold my-3'>
						How does prototypical inheritance work?
					</h2>
					<div>
						<p>
							The Prototypal Inheritance is a feature in javascript used to add
							methods and properties in objects. It is a method by which an
							object can inherit the properties and methods of another object.
							Traditionally, in order to get and set the Prototype of an object,
							we use Object. getPrototypeOf and Object.
						</p>
					</div>
				</div>
				<div className='border rounded p-3'>
					<h2 className='text-center font-bold my-3'>
						What is a unit test? Why should we write unit tests?
					</h2>
					<div>
						<p>
							The main objective of unit testing is to isolate written code to
							test and determine if it works as intended. Unit testing is an
							important step in the development process, because if done
							correctly, it can help detect early flaws in code which may be
							more difficult to find in later testing stages.
						</p>
					</div>
				</div>
				<div className='border rounded p-3'>
					<h2 className='text-center font-bold my-3'>
						React vs. Angular vs. Vue?
					</h2>
					<div>
						<p>
							React:A JavaScript library for building user interfaces Get
							Started
						</p>
						<p>
							Angular:A component-based framework for building scalable web
							applications.
						</p>
						<p>
							Vue:Vue is a JavaScript framework for building user interfaces.
						</p>
						<p className='text-center font-bold my-3'>which is better?</p>
						<p>
							Vue provides higher customizability and hence is easier to learn
							than Angular or React. Further, Vue has an overlap with Angular
							and React with respect to their functionality like the use of
							components. Hence, the transition to Vue from either of the two is
							an easy option
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
