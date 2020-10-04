import React from 'react';

export const useLocalStorage = (key, initial) => {
	const [state, setState] = React.useState(() => {
		const local = window.localStorage.getItem(key);

		return local ? local : initial;
	});

	React.useEffect(() => {
		const themeLocal = window.localStorage.getItem(key);
		if (themeLocal !== null) setState(themeLocal);
	}, [key]);

	React.useEffect(() => {
		window.localStorage.setItem(key, state);
	}, [state, key]);

	return [state, setState];
};
