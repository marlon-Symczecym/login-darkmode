import React from 'react';

import { useLocalStorage } from './useLocalStorage';

export const ThemeContext = React.createContext();

export const ThemeStorage = ({ children }) => {
	const [theme, setTheme] = useLocalStorage('theme', 'light');

	function changeTheme() {
		setTheme(theme === 'light' ? 'dark' : 'light');
	}

	return (
		<ThemeContext.Provider value={{ theme, changeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
