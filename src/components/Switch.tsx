import React, { useState } from 'react';

const Switch: React.FC = () => {
	const [theme, setTheme] = useState('ligth');

	const setDarkTheme = () => {
		const body = document.body;
		body.classList.toggle('dark-theme');

		if (body.className === 'dark-theme') {
			setTheme('light');
		} else {
			setTheme('dark');
		}
	};

	return (
		<label className='switch'>
			<input type='checkbox' className='switch__input'></input>
			<span className='switch__slider' onClick={setDarkTheme}></span>
		</label>
	);
};

export default Switch;
