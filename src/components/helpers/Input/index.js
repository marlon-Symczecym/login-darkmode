import React from 'react';

import './styles.css';

const index = ({ theme, color, message, style, ...props }) => {
	return (
		<div {...props}>
			<label htmlFor={props.id}>{props.name}</label>
			<br />
			<input
				style={{
					border: 'none',
					borderBottomColor: color,
					borderBottomWidth: '2px',
					borderBottomStyle: 'solid',
				}}
				className={`input-${theme}`}
				{...props}
			/>
			{message && (
				<p style={{ backgroundColor: color }} className="message">
					{message}
				</p>
			)}
		</div>
	);
};

export default index;
