import React from 'react';

import './styles.css';

const index = ({ name, ...props }) => {
	return (
		<button {...props} className="form-button" type="submit">
			{name}
		</button>
	);
};

export default index;
