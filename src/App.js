import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';

function App() {
	return (
		<div className='App min-h-screen bg-base-200' data-theme='light'>
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
