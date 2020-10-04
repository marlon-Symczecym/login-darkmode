import React from 'react';
import Login from './components/Login';

import { ThemeStorage } from './components/helpers/hooks/ThemeContext';

import './components/global/styles.css';

function App() {
	return (
		<ThemeStorage>
			<Login />
		</ThemeStorage>
	);
}

export default App;
