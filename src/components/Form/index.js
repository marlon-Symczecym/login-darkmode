import React, { useState } from 'react';

import Input from '../helpers/Input';
import Button from '../helpers/Button';
import { ThemeContext } from '../helpers/hooks/ThemeContext';

import './styles.css';

const Form = () => {
	const { theme } = React.useContext(ThemeContext);

	const [colorInput, setColorInput] = useState('transparent');
	const [message, setMessage] = useState(null);

	function handleInput(event) {
		for (let i in event.target.value + 1) {
			if (i < 8) {
				if (i < 1) {
					setColorInput('transparent');
					setMessage(null);
				} else {
					setColorInput('var(--color-primary-light)');
					setMessage('O username precisa conter 8 ou mais caracteres');
				}
			} else if (i >= 8) {
				setColorInput('rgb(43, 156, 43)');
				setMessage('Perfeito !!');
			}
		}
	}

	return (
		<>
			<form className={`form-${theme}`}>
				<h1>LOGIN</h1>
				<div className="input-wrapper">
					<div>
						<Input
							onChange={handleInput}
							theme={theme}
							color={colorInput}
							message={message}
							placeholder="marlonSymczecym"
							name="username"
							id="username"
							type="text"
						/>
					</div>
					<div>
						<Input
							theme={theme}
							color="transparent"
							placeholder="*****************"
							name="password"
							id="password"
							type="password"
							autoComplete="false"
						/>
					</div>
					<Button name="Entrar" />
				</div>
			</form>
		</>
	);
};

export default Form;
