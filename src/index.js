import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider, { AuthContext } from './contexts/AuthProvider';
import { ToastBar, Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<AuthProvider>
			<App />
			<Toaster />
		</AuthProvider>
	</React.StrictMode>
);

reportWebVitals();
