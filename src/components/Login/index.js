import React from 'react';
import Slidemode from '../helpers/Slidemode';
import Form from '../Form';

import './styles.css';
import { ThemeContext } from '../helpers/hooks/ThemeContext';

const Login = () => {
	const { theme } = React.useContext(ThemeContext);

	return (
		<div className={`login-${theme}`}>
			<div className="container">
				<div className="slide">
					<Slidemode />
				</div>
				<Form />
			</div>
		</div>
	);
};

export default Login;
