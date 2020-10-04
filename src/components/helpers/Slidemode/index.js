import React from 'react';

import { ThemeContext } from '../hooks/ThemeContext';

import './styles.css';

const Slidemode = () => {
	const { theme, changeTheme } = React.useContext(ThemeContext);

	return (
		<div className="slider">
			<button onClick={changeTheme} className={theme}>
				<i className={theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun'}></i>
			</button>
		</div>
	);
};

export default Slidemode;
